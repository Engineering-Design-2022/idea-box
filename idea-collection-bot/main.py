import requests
import speech_recognition as sr


class IdeaCollectionBot:
    POST_IDEA_URL = "http://localhost:8000/ideas"

    def __init__(self) -> None:
        self.recognizer = sr.Recognizer()
        self.microphone = sr.Microphone()

    def listen(self):
        with self.microphone as source:
            self.recognizer.adjust_for_ambient_noise(source)
            audio = self.recognizer.listen(source)
        return audio

    def recognize(self, audio) -> str:
        try:
            return self.recognizer.recognize_google(audio, language="ja-JP")
        except sr.UnknownValueError:
            return "error"
        except sr.RequestError:
            return "error"

    def post_idea(self, title: str, description: str, deadline: str):
        response = requests.post(
            self.POST_IDEA_URL, json={"title": title, "description": description, "deadline": deadline}
        )
        if response.status_code == 200:
            return response.json()
        else:
            return "error"


def main():
    bot = IdeaCollectionBot()
    print("話しかけてください")
    audio = bot.listen()
    idea = bot.recognize(audio)
    print(idea)
    bot.post_idea(idea, "", "")
