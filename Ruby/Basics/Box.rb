#define a class
class Box

	BOX_COMPANY = "TATA Inc"
	BOX_WEIGHT = 10

	# print class information
   	#puts "Type of self = #{self.type}" why this doesn't work ?
   	#puts "Name of self = #{self.name}" why this doesn't work ?

	#Initializing the class variable
	@@count = 0;

	# constructor method
	def initialize(w, h)
		@width, @height = w, h;
		@@count += 1;
	end

	#accessor methods
	def getWidth
		@width
	end
	def getHeight
		@height
	end

	#setter method
	def setWidth=(value)
		@width = value;
	end
	def setHeight=(value)
		@height = value;
	end

	#instance method by default it is public
	def getArea 
		@width * @height
	end
	#protected :getArea #why the getArea is not accessible ?

	def getCount
		puts "Box count in the class : #@@count"
		@@count
	end
	private :getCount

	# define to_s method
   def to_s
      "(w:#@width,h:#@height,wt:#{BOX_WEIGHT})"  # string formatting of the object.
   end
end



class BigBox < Box 



	def printArea
		@area = @width * @height;
		puts "Print Big Box area is: #@area"
	end

	 # changing the existing getArea method
	def getArea
		@area = @width * @height
		puts "Big box area is :#@area"
	end
end


box = Box.new(10, 20);
x = box.getWidth()
y = box.getHeight()
#area = box.getArea()  #why the getArea is not accessible ?
#count  = box.getCount()

# let us freez this object
box.freeze
if( box.frozen? )
   puts "Box object is frozen object"
else
   puts "Box object is normal object"
end


bbox = BigBox.new(5, 2) #why need to match the base class arguments ?
#bbox = BigBox.allocate  #why doesnt this work ? or gives null
bbox.printArea()
bbox.getArea()

puts "Width of the box is :#{x}"
puts "Height of the box is :#{y}"
#puts "Area of the box is : #{area}"
#puts "Total number of boxes is :#{count}"
puts "String Representation of Box is :#{box}"
puts "Accessing the constants:#{Box::BOX_COMPANY}"

=begin 

puts "====================================="

box = Box.new(10, 20)

# use setter methods
box.setWidth = 30
box.setHeight = 50

x = box.getWidth()
y = box.getHeight()
area = box.getArea()
count  = box.getCount()

puts "Width of the box is :#{x}"
puts "Height of the box is :#{y}"
puts "Area of the box is : #{area}"
puts "Total number of boxes is :#{count}"
=end