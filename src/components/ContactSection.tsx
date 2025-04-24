
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { MessageSquare, Phone } from 'lucide-react';

const ContactSection: React.FC = () => {
  const { toast } = useToast();
  const [orderName, setOrderName] = useState('');
  const [orderPhone, setOrderPhone] = useState('');
  const [orderMessage, setOrderMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const whatsappNumber = "+917339614739"; // Replace with your actual WhatsApp number
  
  const sendToWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Basic validation
    if (!orderName || !orderPhone || !orderMessage) {
      toast({
        title: "Missing Information",
        description: "Please fill in all the fields.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }
    
    try {
      // Format the message for WhatsApp
      const message = `*New Order from Nagaram Masala Website*%0A%0A*Name:* ${orderName}%0A*Phone:* ${orderPhone}%0A*Order Details:*%0A${orderMessage}`;
      
      // Create WhatsApp URL
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
      
      // Log the order to the console (in a real app, this would go to S3/SNS)
      console.log("New order:", { orderName, orderPhone, orderMessage });
      
      // Open WhatsApp in a new tab
      window.open(whatsappUrl, '_blank');
      
      // Clear the form
      setOrderName('');
      setOrderPhone('');
      setOrderMessage('');
      
      // Show success message
      toast({
        title: "Order Sent",
        description: "Your order has been sent to WhatsApp. We'll contact you soon!",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send your order. Please try again or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-spice-beige/30 to-white relative">
      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 font-playfair text-spice-brown">Order Our Spices</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Place your order directly through WhatsApp for a quick and personalized experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 font-playfair text-spice-brown">Contact Us</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="bg-spice-red text-white p-2 rounded-full">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <h4 className="font-medium">WhatsApp</h4>
                  <a href={`https://wa.me/${whatsappNumber}`} className="text-spice-red hover:underline">
                    {whatsappNumber.replace(/(\d{2})(\d{5})(\d{5})/, '+$1 $2 $3')}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-spice-red text-white p-2 rounded-full">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p>{whatsappNumber.replace(/(\d{2})(\d{5})(\d{5})/, '+$1 $2 $3')}</p>
                </div>
              </div>
              
              <div className="p-4 bg-spice-beige/20 rounded-lg mt-6">
                <p className="text-muted-foreground italic text-sm">
                  "Experience the traditional hospitality of Nagarathar as we welcome your inquiries and orders.
                  We'll respond promptly with payment information and delivery details."
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 font-playfair text-spice-brown">Place Your Order</h3>
            <form onSubmit={sendToWhatsApp}>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    value={orderName}
                    onChange={(e) => setOrderName(e.target.value)}
                    className="w-full p-3 border border-border rounded-md focus:ring-2 focus:ring-spice-red/30 focus:border-spice-red outline-none transition"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-muted-foreground mb-1">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    value={orderPhone}
                    onChange={(e) => setOrderPhone(e.target.value)}
                    className="w-full p-3 border border-border rounded-md focus:ring-2 focus:ring-spice-red/30 focus:border-spice-red outline-none transition"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1">Your Order</label>
                  <textarea
                    id="message"
                    rows={4}
                    value={orderMessage}
                    onChange={(e) => setOrderMessage(e.target.value)}
                    className="w-full p-3 border border-border rounded-md focus:ring-2 focus:ring-spice-red/30 focus:border-spice-red outline-none transition"
                    placeholder="List the products you want to order and quantities"
                  ></textarea>
                </div>
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-spice-red hover:bg-spice-red/90 text-white font-medium w-full flex items-center justify-center gap-2"
                >
                  <MessageSquare size={20} />
                  {isSubmitting ? "Sending..." : "Send Order via WhatsApp"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
