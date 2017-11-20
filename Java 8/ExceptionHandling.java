import java.util.function.BiConsumer;
public class ExceptionHandling{
	public static void main(String[] args) {
		
		int[] numbers = {1, 2, 3, 4};
		int key = 2; //Change to 0 for causing the divide by zero exception

		process(numbers, key, wrapperLambda((v, k)->{System.out.println(v/k);}));
	}

	//Process method which processes the lambda expression
	static void process(int[] numbers, int key, BiConsumer<Integer, Integer> biConsumer){
		for(int i: numbers){
			biConsumer.accept(i, key);
		}
	}


	//Wrapper for the lambda expression which handles the exception case
	static BiConsumer<Integer, Integer> wrapperLambda(BiConsumer<Integer, Integer> biConsumer){
		return (v, k)->{
			try{
				biConsumer.accept(v, k);
			} catch(ArithmeticException e){
				System.out.println("ArithmeticException in wrapperLambda");
			}
		};
	}
}