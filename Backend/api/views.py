from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from PIL import Image
import requests
from io import BytesIO
from django.http import JsonResponse



@api_view(["GET"])
def get_dominant_color(request):
    image_url = request.GET.get('url')
    if not image_url:
        return JsonResponse({'error': 'Missing image URL'}, status=400)

    try:
        response = requests.get(image_url)
        image = Image.open(BytesIO(response.content))
        image = image.convert('RGB')
        image = image.resize((50, 50))  # Resize to reduce computation

        pixels = list(image.getdata())
        avg_r = sum(p[0] for p in pixels) // len(pixels)
        avg_g = sum(p[1] for p in pixels) // len(pixels)
        avg_b = sum(p[2] for p in pixels) // len(pixels)

        return JsonResponse({'color': [avg_r, avg_g, avg_b]})

    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)
