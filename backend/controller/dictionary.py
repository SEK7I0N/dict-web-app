"""dictionary module"""
from json import dumps, loads
from typing import List

import requests

API_URL  = 'https://api.dictionaryapi.dev/api/v2/entries/en/{word}'

async def get_word_meanings_from_api(word:str):
    """get_word_meanings_from_api returns the definition of a word from the API

    Args:
        word (str): word to search for

    Returns:
        json object: definition of the word
    """
    url = API_URL.format(word=word)
    response = loads(requests.get(url).text)
    # print(f'\nword: {word} \n response {response}')
    if not isinstance(response,List) and response['title'] == 'No Definitions Found':
        return dumps({'meanings':'No Word Found'})
    return dumps({'meanings':response[0]['meanings']})

async  def get_word_phonetics_from_api(word:str):
    """get_word_phonetics_from_api returns the phonetics of a word from the API

    Args:
        word (str): word to search for

    Returns:
        json object: phonetics of the word
    """
    url = API_URL.format(word=word)
    response = loads(requests.get(url).text)
    if not isinstance(response,List) and response['title'] == 'No Definitions Found':
        return dumps({'phonetics':'No Word Found'})
    print(response[0]['phonetics'])
    return dumps({'phonetics':response[0]['phonetics']})

async def get_word_details_from_api(word:str):
    """get_word_details_from_api returns the details of a word from the API

    Args:
        word (str): word to search for

    Returns:
        json object: details of the word
    """
    url = API_URL.format(word=word)
    response = loads(requests.get(url).text)
    if not isinstance(response,List) and response['title'] == 'No Definitions Found':
        return dumps({'details':'No Word Found'})
    return dumps({'details':{'word':response[0]['word'].capitalize(),'license':response[0]['license'],'sourceUrls':response[0]['sourceUrls']}})
