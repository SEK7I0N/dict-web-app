"""dictionary module"""
import json
from typing import List

import requests

API_URL  = 'https://api.dictionaryapi.dev/api/v2/entries/en/{word}'

async def get_word_meanings_from_api(word:str) -> dict:
    """get_word_meanings_from_api returns the definition of a word from the API

    Args:
        word (str): word to search for

    Returns:
        dict: definition of the word
    """
    url = API_URL.format(word=word)
    response = json.loads(requests.get(url).text)
    print(f'\nword: {word} \n response {response}')
    if not isinstance(response,List) and response['title'] == 'No Definitions Found':
        return {'meanings':'No Word Found'}
    return {'meanings':response[0]['meanings']}

async  def get_word_phonetics_from_api(word:str) -> dict:
    """get_word_phonetics_from_api returns the phonetics of a word from the API

    Args:
        word (str): word to search for

    Returns:
        dict: phonetics of the word
    """
    url = API_URL.format(word=word)
    response = json.loads(requests.get(url).text)
    if not isinstance(response,List) and response['title'] == 'No Definitions Found':
        return {'phonetics':'No Word Found'}
    return {'phonetics':response[0]['phonetics']}

async def get_word_details_from_api(word:str) -> dict:
    """get_word_details_from_api returns the details of a word from the API

    Args:
        word (str): word to search for

    Returns:
        dict: details of the word
    """
    url = API_URL.format(word=word)
    response = json.loads(requests.get(url).text)
    if not isinstance(response,List) and response['title'] == 'No Definitions Found':
        return {'details':'No Word Found'}
    return {'details':{'license':response[0]['license'],'sourceUrls':response[0]['sourceUrls']}}
