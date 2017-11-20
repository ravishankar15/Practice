public class RunnableExample{
	
	public static void main(String[] args) {
		

		//Traditional usage before Java 8
		Thread myThread = new Thread(new Runnable(){
			public void run(){
				System.out.println("Hello Runnable");
			}
		});
		myThread.start();


		//Using Lambda expression
		Thread myLambdaThread = new Thread(()->{System.out.println("Hello Runnable Lambda");});
		myLambdaThread.start();


	}
}