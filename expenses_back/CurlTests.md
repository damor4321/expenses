#A falta de una TDD implantado automatico, de momento solo tenemos esta bateria totalmente manual. Falta de tiempo...

# GET
curl -v -s -H "Accept: application/json" http://localhost:8080/expenses | python -mjson.tool
curl -v -s http://localhost:8080/expenses | python -mjson.tool

# POST: SIN AUTH: 403 FORBIDDEN
curl -X POST -H "Accept: application/json"  -H 'Content-Type: application/json' -d '{"date":1417803200, "description":"Pago del Hotel de Malaga", "comment":"", "amount":"23000"}' http://localhost:8080/expenses | python -mjson.tool

# POST: CON AUTH ERRONEA: UNAUTHORIZED
curl -X POST -H "Accept: application/json"  -H 'Authorization: Basic hbuwqJp8gfKcWR7FkfWFvYDQMrw=' -H 'Content-Type: application/json' -d '{"date":1417803200, "description":"Pago del Hotel de Malaga", "comment":"", "amount":"23000"}' http://localhost:8080/expenses | python -mjson.tool

# POST: CON AUTH OK: --user daf:daf genera la cabera de Authorization: Basic valida si la pass en claro es daf, RESP: HTTP/1.1 201 Created
curl -v --user daf:daf -X POST -H "Accept: application/json"  -H 'Content-Type: application/json' -d '{"date":1417803200, "description":"Pago del Hotel de Malaga", "comment":"", "amount":"23000"}' http://localhost:8080/expenses | python -mjson.tool
curl -v -s http://localhost:8080/expenses | python -mjson.tool

# PATCH: SIN AUTH: 403 FORBIDDEN
curl -v -X PATCH -H "Accept: application/json"  -H 'Content-Type: application/json' -d '{"description":"Pago del Hotel de Malaga (Torremolinos)", "comment":"No volver a ir", "amount":"25000"}' http://localhost:8080/expenses/c5d6c519-a256-437c-9cce-c7d588b77659 | python -mjson.tool

# PATCH: CON AUTH: HTTP/1.1 200 OK
curl -v --user daf:daf -X PATCH -H "Accept: application/json"  -H 'Content-Type: application/json' -d '{"description":"Pago del Hotel de Malaga (Torremolinos)", "comment":"No volver a ir", "amount":"25000"}' http://localhost:8080/expenses/c5d6c519-a256-437c-9cce-c7d588b77659 | python -mjson.tool
curl -v -s http://localhost:8080/expenses | python -mjson.tool

# DELETE : CON AUTH: SI LO BORRA PERO RESPONDE "RARO"
curl -v --user daf:daf -X DELETE -H "Accept: application/json"  -H 'Content-Type: application/json' http://localhost:8080/expenses/c5d6c519-a256-437c-9cce-c7d588b77659 | python -mjson.tool
curl -v -s http://localhost:8080/expenses | python -mjson.tool

