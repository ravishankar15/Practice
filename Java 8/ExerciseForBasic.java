import java.util.*;
public class ExerciseForBasic{
	public static void main(String[] args) {
		List<Person> people = Arrays.asList(
				new Person("Charles", "Galado", 24),
				new Person("John", "Kimson", 23),
				new Person("Michel", "Galado", 19),
				new Person("Peter", "Galado", 29)
			);

		//Exercise
		//Ex: 1 Sort List by LastName
		//Ex: 2 Create a method that prints all the elements in the list
		//Ex: 3 Create a method that prints all the elements whose last name starts with G

		printAll(people);

		//Using Java Earlier version
		//Ex: 1
		System.out.println("*******Sort List By LastName******");
		Collections.sort(people, new Comparator<Person>(){
			@Override
			public int compare(Person p1, Person p2){
				return p1.getLastName().compareTo(p2.getLastName());
			}
		});

		//Ex: 2
		System.out.println("*******Printing all the elements******");
		printAll(people);


		//Ex: 3
		System.out.println("*******Printing all the elements whose last name starts with G******");
		printConditionally(people, new Condition(){
			public boolean test(Person p){
				return p.getLastName().startsWith("G");
			}
		});

		//Ex: 3 (Defered)
		System.out.println("*******Printing all the elements whose last name starts with K******");
		printConditionally(people, new Condition(){
			public boolean test(Person p){
				return p.getLastName().startsWith("K");
			}
		});

		System.out.println();
		System.out.println();
		System.out.println("**********************");
		System.out.println();
		System.out.println();
		//Using Java 8
		//Ex: 1
		System.out.println("*******Sort List By LastName******");
		//We dont need to mention the type of p1 and p2 because the compiler takes those from the interface
		Collections.sort(people, (p1, p2) -> {return p1.getLastName().compareTo(p2.getLastName());});

		//Ex: 2
		System.out.println("*******Printing all the elements******");
		//printAll(people);
		
		//We can also create a lambda expression that returns true for all cases
		//Which will print all the elements in the list
		//We dont need to mention the type of p because the compiler takes it from the Condition interface
		printConditionally(people, (p)->{return true;});


		//Ex: 3
		System.out.println("*******Printing all the elements whose last name starts with G******");
		printConditionally(people, (p) -> p.getLastName().startsWith("G"));

		//Ex: 3 (Defered)
		System.out.println("*******Printing all the elements whose last name starts with K******");
		printConditionally(people, (p)-> p.getLastName().startsWith("K"));


	}

	static void printAll(List<Person> people){
		for(Person p: people)
			System.out.println(p);
	}

	static void printConditionally(List<Person> people, Condition condition){
		for(Person p: people){
			if(condition.test(p)){
				System.out.println(p);
			}
		}
	}
}

interface Condition{
	boolean test(Person p);
}


//Bean or model class
class Person{

	private String firstName;
	private String lastName;
	private int age;

	public Person(String firstName, String lastName, int age) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
	}

	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}

	@Override
	public String toString() {
		return "Person [firstName=" + firstName + ", lastName=" + lastName + ", age=" + age + "]";
	}
}