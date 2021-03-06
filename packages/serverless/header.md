<section>
<h1>Using the API</h1>

## **Authentication**  
Many API endpoints require token-based authentication. To authenticate to the API,
provide the user's access token in the Authorization header with the following
format:
```
Bearer [token]
```
An example Authorization header would be:
```
Bearer 58f92e3f735bdf90db440517
```
If an invalid token is given, you will receive a 401 (Unauthorized) HTTP status
with a JSON response containing an error message.

## **Errors**  
All errors will return a 400 (Bad Request) HTTP status and a JSON response
containing an error message. An example error response would be:
```json
{"error":"Query parameters must be valid JSON."}
```

## **GET Parameters**  
GET parameters must be valid JSON accessible within the "query" parameter.

For example, if you are trying to supply the following parameters:
```
{
	"limit": 20,
	"skip": 20,
	"where": {
		"email": "test@example"
	}
}
```
The parameters should be condensed into a valid JSON string, such as:
```
{"limit":20,"skip":20,"where":{"email":"test@example"}}
```
This string should then be URI encoded so special characters are able to be
included in a URL:
```
%7B%22limit%22%3A20%2C%22skip%22%3A20%2C%22where%22%3A%7B%22email%22%3A%22test%40example%22%7D%7D
```
This query should then be appended to the "query" parameter in the URL's GET
parameters:
```
http://www.example.com/v1/users?query=%7B%22limit%22%3A20%2C%22skip%22%3A20%2C%22where%22%3A%7B%22email%22%3A%22test%40example%22%7D%7D
```
</section>
