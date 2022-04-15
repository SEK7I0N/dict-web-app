"""
main.py
"""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from controller.dictionary import (get_word_details_from_api,
                                   get_word_meanings_from_api,
                                   get_word_phonetics_from_api)

app = FastAPI()

orgins =['https://localhost:3000', 'http://localhost:3000']

app.add_middleware(middleware_class=CORSMiddleware,
                allow_origins=orgins,
                allow_credentials=True,
                allow_methods=['*'],
                allow_headers=['*'])

@app.get("/")
def read_root():
    """read_root returns the root of the API

    Returns:
        _type_: json of hello world
    """
    return {"Hello": "World"}

@app.get("/word_meanings/{word}",tags=['Dictionary'])
async def get_word_meanings(word: str):
    """get_word_meanings returns the definition of a word from the API

    Args:
        word (str): word to search for

    Returns:
        _type_: definition of the word
    """
    response = await get_word_meanings_from_api(word)
    # print(response)
    return response

@app.get("/word_phonetics/{word}",tags=['Dictionary'])
async def get_word_phonetics(word: str):
    """get_word_phonetics returns the phonetics of a word from the API

    Args:
        word (str): word to search for

    Returns:
        _type_: phonetics of the word
    """
    response = await get_word_phonetics_from_api(word)
    # print(response)
    return response

@app.get("/word_details/{word}",tags=['Dictionary'])
async def get_word_details(word: str):
    """get_word_details returns the details of a word from the API

    Args:
        word (str): word to search for

    Returns:
        _type_: details of the word
    """
    response = await get_word_details_from_api(word)
    # print(response)
    return response
