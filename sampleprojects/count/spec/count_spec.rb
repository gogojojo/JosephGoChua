require 'count'
	describe Times do 
		describe ".howmany" do
			it "returns the of times the character appears in array" do 
				expect(Times.howmany("b" ,["babs", "bib", "boo", "bey"])).to eq(6)
				expect(Times.howmany('m',['mommy','mammillia','manateee'])).to eq(7)
			end
		end
	end