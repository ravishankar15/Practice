import java.util.*;
import java.util.function.Predicate;
import java.util.function.Supplier;
import java.util.function.Consumer;
public class FunctionalInterface{


	private static List<Person> people  = new ArrayList<Person>();
	public static void main(String[] args) {
		/*List<Person> people = Arrays.asList(
				new Person("Charles", "Galado", 24),
				new Person("John", "Kimson", 23),
				new Person("Michel", "Galado", 19),
				new Person("Peter", "Galado", 29)
			);*/

		//Lambda expression for populating the list using the supplier
		List<Person> people = new ArrayList<Person>();
		people.add(populateList(()->{return new Person("Charles", "Galado", 24);}));
		people.add(populateList(()->{return new Person("John", "Kimson", 23);}));
		people.add(populateList(()->{return new Person("Michel", "Galado", 19);}));
		people.add(populateList(()->{return new Person("Peter", "Galado", 29);}));

		//Lambda expression for populating list using the Supplier with List Object
		/*List<Person> people = populateList(()->{
			List<Person> peopleTemp = new ArrayList<Person>();
			peopleTemp.add(new Person("Charles", "Galado", 24));
			peopleTemp.add(new Person("John", "Kimson", 23));
			peopleTemp.add(new Person("Michel", "Galado", 19));
			peopleTemp.add(new Person("Peter", "Galado", 29));
			return peopleTemp;
		});*/

		//Lambda Expression for pupulating the list using Consumer
		/*populateList((people)->{
			people.add(new Person("Charles", "Galado", 24));
			people.add(new Person("John", "Kimson", 23));
			people.add(new Person("Michel", "Galado", 19));
			people.add(new Person("Peter", "Galado", 29));
		});*/

		//Lambda expression for the Predicate and Consumer
		//To print the LastName starting with G
		printConditionally(people, (p)->{return p.getLastName().startsWith("G");}, (p)->{System.out.println(p);});
	}

	//Predicate<T> is a predefined interface in Java and it holds a boolean method test
	//The implementation for this boolean expression is given as lambda expression
	//printConditionally() method does not hold the behaviour of what to do with the Person Object
	//Behaviour is passed through the consumer object
	static void printConditionally(List<Person> people, Predicate<Person> predicate, Consumer<Person> consumer){
		for(Person p: people){
			if(predicate.test(p)){
				//System.out.println(p);
				consumer.accept(p);
			}
		}
	}

	//Supplier<T> is a predefined interface in Java 8
	//It holds a method get() which takes no input parameters
	//It returns the object specified in the supplier
	//In this case the supplier would return Person object
	static Person populateList(Supplier<Person> supplier){
		return supplier.get();
	}

	//Consumer<T> is a predefined interface in Java 8
	//It holds a method accept(T t) which takes an object as input parameter
	//But it does not return any
	static void populateList(Consumer<List<Person>> consumer){
		consumer.accept(people);
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