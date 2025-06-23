# class Person:
#     def __init__(self, fname, lname):
#        self.firstName = fname
#        self.lastName = lname

#     def printFullName(self): #this is a class method (Function used within  a class)
#         print(self.firstName, self.lastName)

# #WE ARE USING THE PERSON CLASS TO CREATE AN OBJECT , and execute the printFullName method:

# x = Person("Oloo", "Coder")
# x.printFullName()

# #Child Class
# class Student(Person):
#     pass
# x = Student("Joseph", "Kamau")
# x.printFullName()  #this method has been inherited from the parent class to avoid repetition according to oop principle DRY


#iterators

# Tuple = ("apple", "banana", "cherry") #Tuples, Dictionaries, Sets & Lists are iterable objects
# MyIterable = iter(Tuple)

# print(next(MyIterable))
# print(next(MyIterable))
# print(next(MyIterable))
 # print(next(IterableString))

String = "Ribashongilogasheshiakili"
IterableString = iter(String)

print(len(String))

# while((len(String))-1):
#       print(next(IterableString))


for letter in String:
      print(letter)
  

