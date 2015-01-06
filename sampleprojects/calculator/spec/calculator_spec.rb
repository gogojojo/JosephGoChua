require 'calculator'

describe Calculator do 

it "multiplies toether all the numbers and returns the product" do 
	expect(Calculator.multiply([1,2,3])).to eq(6)
	expect(Calculator.multiply([2,3,3])).to eq(18)
end

it "accepts string arguments" do
	expect(Calculator.multiply(["1","3","2"])).to eq(6)
end

it "accepts floats" do 
	expect(Calculator.multiply([1.1,5.7,4.0])).to eq(25.08)
end

end