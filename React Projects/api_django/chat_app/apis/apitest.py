import uuid  # To generate unique IDs

def generate_id(data):
    print("Before generating ID:", data)
    # Generate a unique ID
    unique_id = str(uuid.uuid4())[:15]  # Generate a 15-character unique ID
    # Add it to the dictionary
    data['user_id'] = unique_id
    print("After generating ID:", data)

# Example dictionary
data = {
    "user_name": "abc",
    # "user_id": "abcdq",  # This is optional and can be omitted
    "user_ph_no": "abc",
    "user_email": "abc",
    "user_password": "abc"
}

# Call the function
generate_id(data)
