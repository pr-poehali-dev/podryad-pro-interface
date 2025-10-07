import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Index = () => {
  const [activeSection, setActiveSection] = useState("dashboard");

  const stats = [
    { label: "Объектов в работе", value: "12", icon: "Building2", color: "text-primary" },
    { label: "Открытых задач", value: "45", icon: "ListTodo", color: "text-secondary" },
    { label: "Отклонений по смете", value: "8", icon: "AlertTriangle", color: "text-destructive" },
    { label: "Просроченных проверок", value: "3", icon: "Clock", color: "text-orange-500" },
  ];

  const projects = [
    { id: 1, name: "ЖК Радуга", address: "ул. Ленина, 45", status: "active", progress: 65, deadline: "15.12.2025" },
    { id: 2, name: "ТЦ Галерея", address: "пр. Победы, 12", status: "active", progress: 40, deadline: "20.01.2026" },
    { id: 3, name: "Офис Центр", address: "ул. Мира, 89", status: "review", progress: 85, deadline: "01.11.2025" },
    { id: 4, name: "Школа №15", address: "ул. Школьная, 3", status: "delay", progress: 30, deadline: "10.10.2025" },
  ];

  const budgetComparison = [
    { material: "Кирпич, м³", plan: 1200, fact: 1250, deviation: 4.2, status: "over" },
    { material: "Арматура, т", plan: 100, fact: 95, deviation: -5, status: "under" },
    { material: "Бетон, м³", plan: 850, fact: 870, deviation: 2.4, status: "over" },
    { material: "Сталь, т", plan: 75, fact: 72, deviation: -4, status: "under" },
  ];

  const menuItems = [
    { id: "dashboard", label: "Главная", icon: "LayoutDashboard" },
    { id: "objects", label: "Объекты", icon: "Building2" },
    { id: "budgets", label: "Сметы", icon: "Calculator" },
    { id: "inspections", label: "Проверки", icon: "ClipboardCheck" },
    { id: "documents", label: "Документы", icon: "FileText" },
    { id: "reports", label: "Отчёты", icon: "BarChart3" },
    { id: "risks", label: "Риски", icon: "AlertTriangle" },
    { id: "contractors", label: "Подрядчики", icon: "Users" },
  ];

  const getStatusBadge = (status: string) => {
    const statuses = {
      active: { label: "В работе", variant: "default" as const },
      review: { label: "На проверке", variant: "secondary" as const },
      delay: { label: "Задержка", variant: "destructive" as const },
    };
    return statuses[status as keyof typeof statuses] || { label: status, variant: "outline" as const };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="flex">
        <aside className="w-64 min-h-screen bg-sidebar text-sidebar-foreground shadow-xl">
          <div className="p-6 border-b border-sidebar-border">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-sidebar-primary rounded-lg flex items-center justify-center">
                <Icon name="HardHat" className="text-sidebar-primary-foreground" size={24} />
              </div>
              <div>
                <h1 className="text-xl font-bold">Подряд-ПРО</h1>
                <p className="text-xs opacity-80">Управление проектами</p>
              </div>
            </div>
          </div>
          
          <nav className="p-4 space-y-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  activeSection === item.id
                    ? "bg-sidebar-accent text-sidebar-accent-foreground shadow-md"
                    : "hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
                }`}
              >
                <Icon name={item.icon} size={20} />
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </nav>
        </aside>

        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto animate-fade-in">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-2">
                Добро пожаловать, Иван Петров
              </h2>
              <p className="text-muted-foreground">Панель управления строительными проектами</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow animate-scale-in">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                        <p className="text-3xl font-bold">{stat.value}</p>
                      </div>
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center ${stat.color}`}>
                        <Icon name={stat.icon} size={24} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Tabs defaultValue="objects" className="space-y-6">
              <TabsList className="bg-white shadow-sm">
                <TabsTrigger value="objects">Объекты</TabsTrigger>
                <TabsTrigger value="budgets">Сметы</TabsTrigger>
              </TabsList>

              <TabsContent value="objects" className="space-y-6">
                <Card className="shadow-lg">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>Активные объекты</CardTitle>
                        <CardDescription>Список строительных объектов в работе</CardDescription>
                      </div>
                      <Button>
                        <Icon name="Plus" size={16} className="mr-2" />
                        Добавить объект
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {projects.map((project) => {
                        const statusInfo = getStatusBadge(project.status);
                        return (
                          <div key={project.id} className="p-4 border rounded-lg hover:shadow-md transition-shadow bg-white">
                            <div className="flex items-start justify-between mb-3">
                              <div>
                                <h3 className="font-semibold text-lg">{project.name}</h3>
                                <p className="text-sm text-muted-foreground">{project.address}</p>
                              </div>
                              <Badge variant={statusInfo.variant}>{statusInfo.label}</Badge>
                            </div>
                            <div className="space-y-2">
                              <div className="flex items-center justify-between text-sm">
                                <span className="text-muted-foreground">Прогресс</span>
                                <span className="font-medium">{project.progress}%</span>
                              </div>
                              <Progress value={project.progress} className="h-2" />
                              <div className="flex items-center justify-between text-sm">
                                <div className="flex items-center gap-2 text-muted-foreground">
                                  <Icon name="Calendar" size={14} />
                                  <span>Срок: {project.deadline}</span>
                                </div>
                                <Button variant="outline" size="sm">
                                  Подробнее
                                  <Icon name="ChevronRight" size={14} className="ml-1" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="budgets" className="space-y-6">
                <Card className="shadow-lg">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>Сравнение "план/факт"</CardTitle>
                        <CardDescription>Объект: ЖК Радуга</CardDescription>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Icon name="Filter" size={16} className="mr-2" />
                          Фильтры
                        </Button>
                        <Button size="sm">
                          <Icon name="Download" size={16} className="mr-2" />
                          Экспорт
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Наименование</TableHead>
                          <TableHead className="text-right">План</TableHead>
                          <TableHead className="text-right">Факт</TableHead>
                          <TableHead className="text-right">Отклонение</TableHead>
                          <TableHead className="text-center">Статус</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {budgetComparison.map((item, index) => (
                          <TableRow key={index}>
                            <TableCell className="font-medium">{item.material}</TableCell>
                            <TableCell className="text-right">{item.plan}</TableCell>
                            <TableCell className="text-right">{item.fact}</TableCell>
                            <TableCell className="text-right">
                              <span className={item.status === "over" ? "text-destructive" : "text-success"}>
                                {item.deviation > 0 ? "+" : ""}{item.deviation}%
                              </span>
                            </TableCell>
                            <TableCell className="text-center">
                              {item.status === "over" ? (
                                <Badge variant="destructive">Превышение</Badge>
                              ) : (
                                <Badge variant="default" className="bg-success">Экономия</Badge>
                              )}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                    <Separator className="my-6" />
                    <div className="grid grid-cols-3 gap-4">
                      <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                        <CardContent className="p-4 text-center">
                          <p className="text-sm text-muted-foreground mb-1">Общий бюджет</p>
                          <p className="text-2xl font-bold text-primary">15.2 млн ₽</p>
                        </CardContent>
                      </Card>
                      <Card className="bg-gradient-to-br from-destructive/5 to-destructive/10 border-destructive/20">
                        <CardContent className="p-4 text-center">
                          <p className="text-sm text-muted-foreground mb-1">Перерасход</p>
                          <p className="text-2xl font-bold text-destructive">+320 тыс ₽</p>
                        </CardContent>
                      </Card>
                      <Card className="bg-gradient-to-br from-success/5 to-success/10 border-success/20">
                        <CardContent className="p-4 text-center">
                          <p className="text-sm text-muted-foreground mb-1">Экономия</p>
                          <p className="text-2xl font-bold text-success">-180 тыс ₽</p>
                        </CardContent>
                      </Card>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
