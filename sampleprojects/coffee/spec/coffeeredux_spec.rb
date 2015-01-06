require 'coffeeredux'
describe Price do 
	describe '.compute' do
	it "prints the total price as a $dollar.cents" do
		expect(Price.compute(3.0,4.0)).to eq('$12.00')
		end
	end
end
