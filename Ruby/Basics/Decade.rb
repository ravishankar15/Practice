$LOAD_PATH << '.'
require "support"

class Decade
	include Week
	noOfYears = 10
	def noOfMonths
		puts Week::FIRST_DAY;
		num = 10 * 12;
		puts num;
	end
end

d = Decade.new
puts Week::FIRST_DAY
Week.weeksInMonth
Week.weeksInYear
d.noOfMonths
