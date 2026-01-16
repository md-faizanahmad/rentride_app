"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Facebook, Twitter, Instagram, Mail, Phone } from "lucide-react";

export const metadata = {
  title: "Contact - RentRide",
  description: "Reach out to RentRide for support with your car rental needs",
};

const Contact = () => {
  return (
    <div className="min-h-screen  ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <main className="py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-lg mx-auto"
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  Get in Touch
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="How can we help?"
                      className="mt-1"
                    />
                  </div>
                  <div className="space-y-4">
                    <Button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700"
                    >
                      Send Message
                    </Button>
                    <div className="flex justify-center space-x-4">
                      <a
                        href="https://facebook.com"
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <Facebook className="h-6 w-6" />
                      </a>
                      <a
                        href="https://twitter.com"
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <Twitter className="h-6 w-6" />
                      </a>
                      <a
                        href="https://instagram.com"
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <Instagram className="h-6 w-6" />
                      </a>
                      <a
                        href="mailto:support@rentride.com"
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <Mail className="h-6 w-6" />
                      </a>
                      <a
                        href="tel:+11234567890"
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <Phone className="h-6 w-6" />
                      </a>
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default Contact;
