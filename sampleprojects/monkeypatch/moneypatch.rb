class Fixnum
	def days
		self * 60 * 60 * 20
	end
	def ago
		Time.now - self
	end
end
