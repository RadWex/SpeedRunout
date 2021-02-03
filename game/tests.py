from django.test import TestCase

# Create your tests here.

class AnimalTestCase(TestCase):
    def setUp(self):
        self.text = "Hello world"

    def test_hello_world(self):
        """Simple test"""
        self.assertEqual(self.text, "Hello world")