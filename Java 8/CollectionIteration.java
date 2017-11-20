import java.util.*;
public class CollectionIteration{
	public static void main(String[] args) {
		List<Person> people = Arrays.asList(
				new Person("Charles", "Galado", 24),
				new Person("John", "Kimson", 23),
				new Person("Michel", "Galado", 19),
				new Person("Peter", "Galado", 29)
			);
		System.out.println("*****Using For Loop*******");
		for(int i=0; i<people.size(); i++)
			System.out.println(people.get(i));

		System.out.println("*****Using For in Loop*******");
		for(Person p: people)
			System.out.println(p);

		//forEach takes in one argument which is an instance of a consumer
		//In the forEach statement we are saying that, 
		//For each person in the people we need to execute the lambda expression
		System.out.println("*****Using lambda forEach Loop*******");
		people.forEach((p)->{System.out.println(p);});

		//We can represent using the lambda expression
		System.out.println("*****Using lambda forEach Loop MethodReferences*******");
		people.forEach(System.out::println);


	}
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