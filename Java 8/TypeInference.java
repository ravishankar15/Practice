/*
	->We dont need to explicitly mention the type of s in the lambda expression
		The type will be taken from the interface
*/

public class TypeInference{
	public static void main(String[] args) {
		StringLengthLambda slLambda = (s) -> {return s.length();};
		System.out.println(slLambda.getLength("Hello World"));

		//Note we are passing the function as a parameter
		printFromLambda(slLambda);
	}

	public static void printFromLambda(StringLengthLambda l){
		System.out.println("From Function " + l.getLength("Hello World"));
	}
}

interface StringLengthLambda{
	int getLength(String s);
}