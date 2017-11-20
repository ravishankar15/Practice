/*
	->To pass the behaviour we create a Greeting interface which has a perform method
	->We provide multiple implementation for this Greeting interface
	->We pass the implementation object to the greet method
	->Thus the greet method knows what to do exactly based on the object passed

	Note: In this we are not actually passing the behaviour to the greet method. We are
			passing the thing or object which has the behaviour in this case HelloGreeting
			or Welcome Greeting
*/
public class Greeter{
	public static void greet(Greeting greeting){
		greeting.perform();
	}

	public static void main(String[] args) {
		HelloGreeting hello = new HelloGreeting();
		WelcomeGreeting welcome = new WelcomeGreeting();
		Greeter greet = new Greeter();
		greet(hello);
		greet(welcome);

		//Using Lambda Expression
		Greeting lambdaGreeting = () -> {System.out.println("Hello World Lambda !");};
		lambdaGreeting.perform();


	}
}


interface Greeting{
	public void perform();
}


class HelloGreeting implements Greeting {

	public void perform(){
		System.out.println("Hello World !");
	}
}


class WelcomeGreeting implements Greeting {
	public void perform(){
		System.out.println("Welcome to the World !");
	}	
}