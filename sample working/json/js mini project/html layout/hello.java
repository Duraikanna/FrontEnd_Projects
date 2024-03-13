import java.util.Scanner;
class hello{
    static  void fulldetailes(String name,int age,String From){
        System.out.println("Full detailes of employee: ");
        System.out.println("Name:" +name+
                           "\n Age: "+age+
                           "\n From:"+From     
        );

    }
    public static void main(String[]args)
    {
        Scanner sc1=new Scanner(System.in);
        // System.out.println( "   Detailes:");
        // System.out.println("Enter your name");
        // String name=sc1.nextLine();
        // System.out.println("Wellcome "+name + "\n what is your age");
        // System.out.println("From :" );
        // String From=sc1.nextLine(); 
        // System.out.println("age :"); 
        // int age=sc1.nextInt();       
        // sc1.close(); 
        // fulldetailes(name, age, From);
        String user[]=new String[2];
        for(int i=0;i<user.length;i++)
        {
            System.out.println("Enter Username"+i);
            String n=sc1.nextLine();
            user[i]=n;
        }
        System.out.println("user[1]"+user[0]);

    }
}