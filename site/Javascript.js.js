import javax.swing.*;
import java.awt.*;
public class JButtonExemple
{  
  public static void main(String[] args) 
  {
    //créer un frame
    JFrame frame = new JFrame("Exemple JButton");
    //créer un bouton
    JButton btn = new JButton("Cliquez ici");
    //définir la position du bouton
    btn.setBounds(70,80,100,30);
    //changer la couleur d'arrière plan du bouton
    btn.setBackground(Color.RED);
    //ajouter le bouton au frame
    frame.add(btn);
    frame.setSize(250,250);
    frame.setLayout(null);
    frame.setVisible(true);  
  }
}