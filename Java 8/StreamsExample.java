import java.util.*;
public class StreamsExample{
	public static void main(String[] args) {
		List<Person> people = Arrays.asList(
				new Person("Charles", "Galado", 24),
				new Person("John", "Kimson", 23),
				new Person("Michel", "Galado", 19),
				new Person("Peter", "Galado", 29)
			);

		//The filter takes in a predicate referece
		//Passing a lambda expression for the predicate interface
		//forEach will iterate and print the values
		people.stream()
		.filter((p)->p.getLastName().startsWith("G"))
		.forEach(p->System.out.println(p));



		long count = people.stream()
		.filter((p)->p.getLastName().startsWith("G"))
		.count();

		System.out.println(count);

		long pcount = people.parallelStream()
		.filter((p)->p.getLastName().startsWith("G"))
		.count();

		System.out.println(pcount);
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