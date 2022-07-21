# various-bulletin-boards

## List

1. [Golang](./go)[X]
2. [Python](./py)[X]
   1. [fastapi](./py/fastapi)[X]
   2. [flask](./py/flask)[X]
3. [TypeScript](./ts)[X]
   1. [express](./ts/express)[X]
   2. [koa](./ts/koa)[X]
   3. [nest](./ts/nest)[O]

### API 명세서

#### GET /board/{idx : number}

게시물 `idx`를 기준으로 조회합니다.  
하나의 게시물만 가져옵니다.

##### req

```
/board/{idx : number}
```

##### res

```json
{
  "success": true,
  "error": "만약 success가 false면 여기에 에러메세지가 뜨는",
  "data": {
    "idx": 1,
    "title": "이것은 무스비",
    "content": "이것또한 무스비",
    "tag": "#이런들 #어떠하리 #저런들 #어떠하리"
    "createdAt": "some createdAt"
  }
}
```

#### GET /board?page=1&direction=asc&sortby=createdat

게시물을 페이지로 가져옵니다.  
`page`는 쪽수를 의미합니다.  
`direction`은 `asc` 또는 `desc`만 들어가며, 정렬 방향을 의미합니다.  
`sortby`는 어떤 것을 기준으로 정렬을 할지에 대한 응답입니다. `createdat`이 `default`며 추가적으로 들어갈 값은 아직 없습니다.

한 페이지에 10개씩 가져옵니다.

##### req

```
/board?page=1&direction=asc&sortby=createdat
```

##### res

```json
{
  "success": true,
  "error": "만약 success가 false면 여기에 에러메세지가 뜨는",
  "data": [
    {
      "idx": 1,
      "title": "이것은 무스비",
      "tag": "#이런들 #어떠하리 #저런들 #어떠하리"
    },
    {
      "idx": 2,
      "title": "이것은 무스비",
      "tag": "#이런들 #어떠하리 #저런들 #어떠하리"
    },
    {
      "idx": 3,
      "title": "이것은 무스비",
      "tag": "#이런들 #어떠하리 #저런들 #어떠하리"
    },
    ...
    {
      "idx": 10,
      "title": "이것은 무스비",
      "tag": "#이런들 #어떠하리 #저런들 #어떠하리"
    }
  ]
}
```

#### POST /board

게시물을 생성하는 API

##### req

```json
{
  "title": "이것은 무스비",
  "content": "이것또한 무스비",
  "tag": "#이런들 #어떠하리 #저런들 #어떠하리"
}
```

##### res

```json
{
  "success": true,
  "error": "만약 success가 false면 여기에 에러메세지가 뜨는",
  "data": {
    "idx": 1,
    "title": "이것은 무스비",
    "content": "이것또한 무스비",
    "tag": "#이런들 #어떠하리 #저런들 #어떠하리"
  }
}
```

#### PATCH /board/{idx : number}

게시물을 수정하는 API

##### req

```json
{
  "title": "Optional값",
  "content": "Optional값",
  "tag": ["Optional값"]
}
```

##### res

```json
{
  "success": true,
  "error": "만약 success가 false면 여기에 에러메세지가 뜨는",
  "data": {
    "idx": 1,
    "title": "Optional값",
    "content": "Optional값",
    "tag": "Optional값"
  }
}
```

#### DELETE /board/{idx : number}

게시물을 삭제하는.

##### req

```
/board/{idx : number}
```

##### res

```json
{
  "success": true,
  "error": "만약 success가 false면 여기에 에러메세지가 뜨는"
}
```
