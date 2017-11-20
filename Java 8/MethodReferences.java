import java.util.function.Consumer;
public class MethodReferences{
	public static void main(String[] args) {


		/* ()->printMessage() -> This Expression means that it takes no arguments
									and returns no values 
								 In other words the expression just excecutes the method */
		//In such a case we can use a short way of representing that expression in the form of 
			//method references
		// ()->printMessage() === MethodReferences::printMessage
		Thread t = new Thread(MethodReferences::printMessage);
		t.start();


		//A method which takes in one parameter as input and returns no value can
		//also be represented using Method references
		printConsumer("Hello Consumer !", (message)->System.out.println(message));
		printConsumer("Hello MethodReferences |", System.out::println);
	}

	static void printMessage(){
		System.out.println("Hello Message!");
	}

	static void printConsumer(String message, Consumer<String> consumer){
		consumer.accept(message);
	}
}