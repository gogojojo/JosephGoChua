class Calculator

	def self.multiply(numbers) #=> this is an example of a class method "self" points back to the class
		@one = 1
		numbers.each {|i| @one *= i.to_f }
	end

	return @one.rounds(2)

end	