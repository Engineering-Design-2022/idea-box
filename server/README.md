# API server
JavaによるAPIサーバーのコード。

## 仕様
### /ideas [POST]
アイデアを投稿します。
#### Request
```json
{
    "title": "タイトル",
    "description": "説明",
    "deadline": "2020-01-07T00:00:00Z",
}
```

#### Response
```json
{
    "id": "1",
    "title": "タイトル",
    "description": "説明",
    "deadline": "2020-01-07T00:00:00Z",
    "created_at": "2020-01-01T00:00:00Z",
}
```

### /ideas [GET]
アイデアの一覧を取得します。
#### Request
```json
{
    "page": 1,
    "limit": 10,
}
```

#### Response
```json
{
    "ideas": [
        {
            "id": "1",
            "title": "タイトル",
            "description": "説明",
            "deadline": "2020-01-07T00:00:00Z",
            "created_at": "2020-01-01T00:00:00Z",
        },
        {
            "id": "2",
            "title": "タイトル",
            "description": "説明",
            "deadline": "2020-01-07T00:00:00Z",
            "created_at": "2020-01-01T00:00:00Z",
        },
    ],
    "total": 2,
}
```

### /ideas/{id} [GET]
アイデアの詳細を取得します。
#### Request
None

#### Response
```json
{
    "id": "1",
    "title": "タイトル",
    "description": "説明",
    "deadline": "2020-01-07T00:00:00Z",
    "created_at": "2020-01-01T00:00:00Z",
    "comments": [
        {
            "id": "1",
            "content": "コメント",
            "created_at": "2020-01-01T00:00:00Z",
        },
        {
            "id": "2",
            "content": "コメント",
            "created_at": "2020-01-01T00:00:00Z",
        },
    ],
}
```

### /ideas/{id}/comment [POST]
アイデアにコメントを投稿します。
#### Request
```json
{
    "comment": "コメント",
}
```

#### Response
```json
{
    "id": "1",
    "idea_id": "1",
    "comment": "コメント",
    "created_at": "2020-01-01T00:00:00Z",
}
```

