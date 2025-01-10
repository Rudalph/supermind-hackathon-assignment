from flask import Flask, jsonify
from flask_cors import CORS
import requests
from typing import Optional
import re
import json


app = Flask(__name__)
CORS(app) 

BASE_API_URL = "https://api.langflow.astra.datastax.com"
LANGFLOW_ID = "61b9e2c1-7931-4384-92b7-c229c217b22b"
ENDPOINT = "6141ffee-8ebe-4051-af85-2d0846123475"
APPLICATION_TOKEN = "AstraCS:TNZtTWZPGxvcfbEGUDMYhKyF:22e88cc1ffbdd98aa780781be0ac61838f845bd6183638f64aea8203fa665527"


TWEAKS = {
  "ChatInput-LtLvl": {
    "background_color": "",
    "chat_icon": "",
    "files": "",
    # "input_value": "Reels",
    "sender": "User",
    "sender_name": "User",
    "session_id": "",
    "should_store_message": True,
    "text_color": ""
  },
  "ParseData-M0AX8": {
    "sep": "\n",
    "template": "{text}"
  },
  "Prompt-T2E3V": {
    "context": "",
    "question": "",
    "template": "{context}\n\n---\n\n \"You are an assistant for question-answering tasks. \"\n    \"Use the following pieces of retrieved context to answer\"\n    \"Answer the question in JSON format only.\" \n    \" {{ postType : value, averageEngagement : Number, Likes : number of likes, Share : number of Shares,  Comment : number of comments }}\"\n   \"You have to strictly follow this format only\"\n    \"Make sure to calculate the average engagement on your own and just return final number in output\"\n    \"If you don't know the answer, say that you \"\n    \"don't know. Use three sentences maximum and keep the \"\n    \"answer concise.\"\n    \"\\n\\n\"\n\nQuestion: {question}\n\nAnswer: "
  },
  "SplitText-XW7z4": {
    "chunk_overlap": 100,
    "chunk_size": 500,
    "separator": "\n"
  },
  "ChatOutput-MuTeN": {
    "background_color": "",
    "chat_icon": "",
    "data_template": "{text}",
    "input_value": "",
    "sender": "Machine",
    "sender_name": "AI",
    "session_id": "",
    "should_store_message": True,
    "text_color": ""
  },
  "AstraDB-048yV": {
    "advanced_search_filter": "{}",
    "api_endpoint": "https://8f2b139a-f7a6-40ec-999e-e200824ff767-us-east-2.apps.astra.datastax.com",
    "batch_size": None,
    "bulk_delete_concurrency": None,
    "bulk_insert_batch_concurrency": None,
    "bulk_insert_overwrite_concurrency": None,
    "collection_indexing_policy": "",
    "collection_name": "social_media_engagement",
    "embedding_choice": "Embedding Model",
    "keyspace": "",
    "metadata_indexing_exclude": "",
    "metadata_indexing_include": "",
    "metric": "cosine",
    "number_of_results": 4,
    "pre_delete_collection": False,
    "search_filter": {},
    "search_input": "",
    "search_score_threshold": 0,
    "search_type": "Similarity",
    "setup_mode": "Sync",
    "token": "ASTRA_DB_APPLICATION_TOKEN"
  },
  "AstraDB-Nl7NR": {
    "advanced_search_filter": "{}",
    "api_endpoint": "https://8f2b139a-f7a6-40ec-999e-e200824ff767-us-east-2.apps.astra.datastax.com",
    "batch_size": None,
    "bulk_delete_concurrency": None,
    "bulk_insert_batch_concurrency": None,
    "bulk_insert_overwrite_concurrency": None,
    "collection_indexing_policy": "",
    "collection_name": "social_media_engagement",
    "embedding_choice": "Embedding Model",
    "keyspace": "",
    "metadata_indexing_exclude": "",
    "metadata_indexing_include": "",
    "metric": "cosine",
    "number_of_results": 4,
    "pre_delete_collection": False,
    "search_filter": {},
    "search_input": "",
    "search_score_threshold": 0,
    "search_type": "Similarity",
    "setup_mode": "Sync",
    "token": "ASTRA_DB_APPLICATION_TOKEN"
  },
  "File-s4x6H": {
    "concurrency_multithreading": 4,
    "path": "SuperMind Hackathon - Social Media Engagment Dataset - Sheet1.csv",
    "silent_errors": False,
    "use_multithreading": False
  },
  "GroqModel-kDDVQ": {
    "groq_api_base": "https://api.groq.com",
    "groq_api_key": "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",
    "input_value": "",
    "max_tokens": None,
    "model_name": "llama-3.1-8b-instant",
    "n": None,
    "stream": False,
    "system_message": "",
    "temperature": 0.1
  },
  "Google Generative AI Embeddings-lLVKu": {
    "api_key": "AIzaSyADMaTv5eXa3XL1QICbTlpWcMN20SVwUWw",
    "model_name": "models/text-embedding-004"
  },
  "Google Generative AI Embeddings-YnHX9": {
    "api_key": "AIzaSyADMaTv5eXa3XL1QICbTlpWcMN20SVwUWw",
    "model_name": "models/text-embedding-004"
  },
  "Prompt-xHFSh": {
    "template": "{context}\n\n---\n\n \"You are an assistant for question-answering tasks. \"\n    \"Use the following pieces of retrieved context to answer 'Generate Insights on the Give Data' \"\n    \"When you are asked to generate insights in the data make sure to answer in below example format and also the way you want\"\n    \"Answers should always be in pointer maximum there should be 7 pointers only\"\n    \"Example 1: Carousel posts have 20% higher engagement than static posts. \"\n    \"Example 2: Reels drive 2x more comments compared to other formats.\"\n    \"If you don't know the answer, say that you \"\n    \"don't know. Use three sentences maximum and keep the \"\n    \"answer concise.\"\n    \"\\n\\n\"\n\nAnswer: ",
    "context": ""
  },
  "GroqModel-0b3AR": {
    "groq_api_base": "https://api.groq.com",
    "groq_api_key": "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",
    "input_value": "",
    "max_tokens": None,
    "model_name": "llama-3.1-8b-instant",
    "n": None,
    "stream": False,
    "system_message": "",
    "temperature": 0.1
  },
  "TextOutput-Dhg5Z": {
    "input_value": ""
  }
}

def run_flow(message: str,
  endpoint: str,
  output_type: str = "text",
  input_type: str = "chat",
  tweaks: Optional[dict] = None,
  application_token: Optional[str] = None) -> dict:
    """
    Run a flow with a given message and optional tweaks.

    :param message: The message to send to the flow
    :param endpoint: The ID or the endpoint name of the flow
    :param tweaks: Optional tweaks to customize the flow
    :return: The JSON response from the flow
    """
    api_url = f"{BASE_API_URL}/lf/{LANGFLOW_ID}/api/v1/run/{endpoint}"

    payload = {
        "input_value": message,
        "output_type": output_type,
        "input_type": input_type,
    }
    headers = None
    if tweaks:
        payload["tweaks"] = tweaks
    if application_token:
        headers = {"Authorization": "Bearer " + application_token, "Content-Type": "application/json"}
    response = requests.post(api_url, json=payload, headers=headers)
    return response.json()
  
  
@app.route('/generate-insights', methods=['GET'])
def generate_json_output():
    message = "Static Image"
    response = run_flow(
        message=message,
        endpoint=ENDPOINT,
        tweaks=TWEAKS,
        application_token=APPLICATION_TOKEN
    )
    text_output = response['outputs'][0]['outputs'][0]['results']['text']['text']
    print(text_output)
    
    regex = r"(\d+)\.\s\*\*(.*?)\*\*:(.*?)\n"
    points = {}
    matches = re.findall(regex, text_output)
    for match in matches:
        point_number = match[0]
        point_title = match[1].strip()
        point_description = match[2].strip()
        points[f'point {point_number}'] = {
            'title': point_title,
            'description': point_description
        }
    json_output = json.dumps(points, indent=4)
    print(json_output)
    return jsonify(json_output=json_output)
    


if __name__ == "__main__":
    app.run(debug=True, port=5001)