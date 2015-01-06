class Times	
	def self.howmany(character,strings)
		appears = 0
		strings.each do |string| 
				appears += string.count(character)
		end
		return appears
	end
end