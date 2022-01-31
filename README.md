# demo-streaming-API

The API for the full stack coding challenge contains a Graphql API and a REST API components. 

## API reference

- Graphql API

    **Query all data with all its fields.**
```
query {
    getTitles {
        title
        thumbnail
    }
} 
```

- REST API

    **Get all items**
```
GET /api/titles
```