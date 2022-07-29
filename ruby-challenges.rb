# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']
# psuedocode:
# 1. Create a method 
# 2. Take in an array of words
# 3. Take in a single letter
# 4. Return an array of words that contain the letter


def letter_check(array, letter)
  array.select { |word| word.include?(letter) }
end

# -------------------2) Create a method that takes in an array of numbers and returns the sum of the numbers. Use the test variables provided.

nums_array1 = [42, 7, 27]
# Expected output: 76

nums_array2 = [25, 17, 47, 11]
# Expected output: 100

# psuedocode:
# 1. Create a method
# 2. Take in an array of numbers
# 3. Return the sum of the numbers


def sum_nums(array)
  array.reduce(:+)
end


# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'
# Psuedocode:
# Create a class
# Initialize with a model, wheels, and current_speed
# Create a bike_info method that returns a sentence with all the data from the bike object


def bike_info(model, wheels, current_speed)
  "#{model} bike has #{wheels} wheels and is going #{current_speed} mph."
end



# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0

# Pseudocode:

#  Add the ability to pedal faster and brake.
#  The pedal_faster method should increase the speed by a given amount.
#  The brake method should decrease the speed by a given amount.
#  The bike cannot go negative speeds.

def pedal_faster(current_speed, amount)
  current_speed + amount
end