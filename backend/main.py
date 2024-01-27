import fastapi
from fastapi.middleware.cors import CORSMiddleware
import random
import math

origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:8000",
    "http://localhost:3000"
]

app = fastapi.FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def numberGen():
    number = random.randint(100, 199) 
    print("number = ", number)
    return number


@app.get("/")
def fact():
    fact = math.factorial(numberGen())
    print("factorial = ", fact)
    return {fact}