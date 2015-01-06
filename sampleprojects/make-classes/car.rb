class Car
	def initialize(speed, color, material)
		@speed = speed
		@color = color
		@material = material
	end
	def fourwheels
		true
	end
	def airbags
		true
	end
	def description
		puts " The max speed is #{@speed}, the color is #{@color}, and the seat material is #{@material}."
	end	
end

class Honda < Car
	def initialize(speed, color, material)
		@make = Honda
		@speed = speed
		@color = color
		@material = material
	end
	def make
		@make
	end
end

class Food 
	def edible
		true
	end
	def hascalories
		true
	end
end
class Hamburgers < Food
	def buns
		true
	end
	def meat 
		true
	end
end
class Cheeseburgers < Hamburgers
	def cheese
		true
	end
end
class Vegburgers < Hamburgers
	def meat
		false
	end
end

