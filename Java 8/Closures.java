public class Closures{
	public static void main(String[] args) {
		int a = 10;
		int b = 20; // The variable should be final

		doProcess(a, (i) -> {
			//b = 40;
			//If we try to change the value of a variable referenced by the 
			//lambda expression we would get a compilation error saying that variable
			//should be final. The same would happen in the case of inner classes as well
			System.out.println(i + b);
		});

	}

	static void doProcess(int a, Process p){
		p.process(a);
	}
}

interface Process{
	void process(int a);
}