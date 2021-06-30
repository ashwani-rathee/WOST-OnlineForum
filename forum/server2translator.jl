using HTTP

response = HTTP.request("POST","https://api.nlpcloud.io/v1/opus-mt-en-zh/translation",["Authorization"=> "Token f7394e5edd28667ff035dc8825425f88d6ad8c52"],body="""{"text":"John Doe has been working for Microsoft in Seattle since 1999."}""")
# http://api.wolframalpha.com/v2/query?input=pi&appid=UJLP48-LPE4WU3H9E&output=json
println(String(response.body))