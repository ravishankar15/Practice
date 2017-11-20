public class ThisReference{
	public static void main(String[] args) {
		

		//This is a clasic way where we are referencing the this Operator
		//The static method cannot reference the this Operator
		//But here the this operator refers the anonymous inner class
		doProcess(10, new Process(){
			public void process(int i){
				System.out.println("Value in InnerClass "+i);	
				System.out.println(this);
			}

			//Overriding the toString method
			public String toString(){
				return "This is a anonymous inner class ";
			}
		});

		//In Lambda expression we cannot refer to this operator
		doProcess(20, (v)->{
			System.out.println("Value in Lambda "+v);
			//System.out.println(this); //Cannot be referred
		});


		ThisReference tre = new ThisReference();
		tre.excecute();

	}


	static void doProcess(int i, Process p){
		p.process(i);
	}


	//If we have this in a non static method then 
	//The this operator would refer to the referece of the class itself
	//In this case the ThisReference
	public void excecute(){
		doProcess(30, (v)->{
			System.out.println("Value in Lambda Non-Static "+v);
			System.out.println(this);
		});
	}


	public String toString(){
		return "This is a referece of ThisReference class ";
	}

}

interface Process{
	void process(int a);
}