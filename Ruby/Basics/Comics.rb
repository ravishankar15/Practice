$PRODUCTION = "Marvel";
class Comics
	@@count = 0;
	@@names = Array.new()

	def initialize(id, name)
		@id = id;
		@name = name;
		@@names[@@count] = name;
		@@count+=1;
	end

	def totalNoOfCust()
		puts "Total Number of Charecters: #{@@count}";
	end


	def displayDetails()
		puts "Charecter: " + "ID: #{@id} " + "Name: #{@name} ";
		displayRange();
	end

	def displayAll(*comic)
		for i in comic
			i.displayDetails();
		end
		puts "Print names from Arrays: "
		puts @@names
		puts "The last Charecter is: " + @@names.at(@@count - 1)
	end

	def displayRange()
		case @id
		when 0 .. 2
			puts "Level 1";
		when 3 .. 4
			puts "Level 2";
		when 5 .. 6
			puts "Level 3";
		else
			puts "Level 4";			
		end
	end

end

char1 = Comics.new(1, "Ironman");
char2 = Comics.new(2, "CaptainAmerica");
char3 = Comics.new(3, "Doctor Strange");
char4 = Comics.new(4, "Thor");
char5 = Comics.new(5, "Spiderman");
char6 = Comics.new(6, "BlackPanther");
char7 = Comics.new(7, "BlackWidow");


#puts "Enter to process"
#val = gets
#puts val

#Why the above 3 lines not working ?

#if(val == "yes")
	char1.displayAll(char1, char2, char3);

	# char1.displayDetails();
	# char2.displayDetails();
	# char3.displayDetails();
	# char4.displayDetails();
	# char5.displayDetails();
	# char6.displayDetails();
	# char7.displayDetails();

	char1.totalNoOfCust();
#end