import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.Scanner;

public class NameGenerator {
    public static void main(String[] args) {
        List<String> names = new ArrayList<>();
        
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter names (one per line, type 'done' when finished):");
        while (true) {
            String name = scanner.nextLine().trim();
            if (name.equals("done")) {
                break;
            }
            names.add(name);
        }
        
        System.out.print("Enter a letter: ");
        char letter = scanner.nextLine().charAt(0);
        
        System.out.println("Generated names:");
        Random rand = new Random();
        int count = 0;
        while (count < 5) {
            String name = names.get(rand.nextInt(names.size()));
            if (name.charAt(0) == letter) {
                System.out.println(name);
                count++;
            }
        }
    }
}
