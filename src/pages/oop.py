class Person:
    nationality = "Kenyan"
    tribe = "genZ"
    president = "the people"


person1 = Person()

class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

p1 = Person("Oloo", 25)
print(p1.name)
print(p1.age)

# class Person:
#     def __init__(self, name, age):
#         self.name = name
#         self.age = age
#     def __str__(self):
#         return f"{self.name}{self.age}"
    


person1.age = 40
del person1.age
del person1


class advertisers:
    pass

#parent / base class
#derived / child class
#inheritance
