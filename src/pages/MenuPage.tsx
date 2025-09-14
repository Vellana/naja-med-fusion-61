import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';

// --- DATA MOVED LOCALLY TO BYPASS IMPORT ERROR ---
interface MenuItem {
  name: string;
  description: string;
  price: string;
}
interface MenuCategory {
  name: string;
  items: MenuItem[];
}
const menuData: MenuCategory[] = [
  {
    name: "Appetizers",
    items: [
      { name: "Signature Mezze Tower", description: "Hummus, baba ghanoush, tabouleh, and fresh pita.", price: "$28" },
      { name: "Grilled Halloumi", description: "Served with a fig jam and balsamic glaze.", price: "$16" },
      { name: "Spicy Feta Dip", description: "Whipped feta with roasted red peppers and olive oil.", price: "$14" },
      { name: "Lamb Lollipops", description: "Tender grilled lamb chops with a mint yogurt sauce.", price: "$22" },
    ],
  },
  {
    name: "Main Courses",
    items: [
      { name: "Grilled Branzino", description: "Whole fish with Mediterranean herbs and lemon.", price: "$32" },
      { name: "NAJA Fusion Burger", description: "American classic with feta, olives, and herb aioli.", price: "$24" },
      { name: "Chicken Kebab Platter", description: "Marinated chicken skewers with saffron rice and grilled vegetables.", price: "$28" },
      { name: "Pomegranate Glazed Short Rib", description: "Slow-braised short rib with a rich pomegranate reduction.", price: "$36" },
    ],
  },
  {
    name: "Desserts & Coffee",
    items: [
      { name: "Baklava Cheesecake", description: "A fusion of classic baklava and creamy cheesecake.", price: "$12" },
      { name: "Olive Oil Cake", description: "Moist and fragrant, served with fresh berries.", price: "$10" },
      { name: "Turkish Coffee Service", description: "Traditionally prepared and served.", price: "$8" },
    ],
  },
];
// --- END LOCAL DATA ---

const MenuPage = () => {
  return (
    <PageLayout>
      <Header />
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-extrabold text-primary font-montserrat mb-4">
              Our Menu
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-lato">
              A curated selection of dishes where Mediterranean heritage meets American innovation.
            </p>
          </div>

          <div className="sticky top-20 z-20 bg-background/80 backdrop-blur-sm py-4 mb-12 rounded-lg shadow-sm border">
            <div className="flex justify-center flex-wrap gap-4">
              {menuData.map(category => (
                <a key={category.name} href={`#${category.name.toLowerCase().replace(/\s+/g, '-')}`}>
                  <Button variant="ghost" className="text-primary hover:bg-accent/10">
                    {category.name}
                  </Button>
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-16">
            {menuData.map(category => (
              <section key={category.name} id={category.name.toLowerCase().replace(/\s+/g, '-')}>
                <h2 className="text-4xl font-bold text-accent font-cinzel mb-8 border-b-2 border-accent/20 pb-4">
                  {category.name}
                </h2>
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                  {category.items.map(item => (
                    <div key={item.name} className="flex justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-primary">{item.name}</h3>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </div>
                      <p className="text-lg font-semibold text-primary pl-4">{item.price}</p>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

        </div>
      </div>
      <Footer />
    </PageLayout>
  );
};

export default MenuPage;