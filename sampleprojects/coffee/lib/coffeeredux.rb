class Price 
	def self.compute(price,pounds)
		i = price.to_f * pounds.to_f
		return "$#{i.round(2)}"
	end
end
