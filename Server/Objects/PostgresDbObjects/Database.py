import json 

class Database:
    def __init__(self, name):
        self.name = name

    def get_name(self):
        return self.name
    
    def set_name(self, newName):
        self.name = newName
    
    def __eq__(self, other):
        return self.get_name() == other.get_name()
    
    def __hash__(self):
        return hash((self.name))
    
    def to_json(self):
        return json.dumps(self, default=lambda o: o.__dict__)