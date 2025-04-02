package src;

public class Main {
    private String name;

    public String getName() {
        return name;
    }

    public void setName(String newName) {
        this.name = newName;
    }
    public static void main(String[] args) {
        Main me = new Main();
        
        me.setName("Will");
        String myName = me.getName();

        System.out.println(myName + " is a pimp!!!");
    }
}
