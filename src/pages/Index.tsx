import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
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
    { id: 1, name: "ЖК Радуга", address: "ул. Ленина, 45", status: "active", progress: 65, deadline: "15.12.2025", contractor: "СтройМастер" },
    { id: 2, name: "ТЦ Галерея", address: "пр. Победы, 12", status: "active", progress: 40, deadline: "20.01.2026", contractor: "МегаСтрой" },
    { id: 3, name: "Офис Центр", address: "ул. Мира, 89", status: "review", progress: 85, deadline: "01.11.2025", contractor: "СтройМастер" },
    { id: 4, name: "Школа №15", address: "ул. Школьная, 3", status: "delay", progress: 30, deadline: "10.10.2025", contractor: "СтройГрупп" },
  ];

  const inspections = [
    { id: 1, object: "ЖК Радуга", date: "05.10.2025", inspector: "Сидоров А.П.", status: "completed", findings: 3 },
    { id: 2, object: "ТЦ Галерея", date: "08.10.2025", inspector: "Петрова М.И.", status: "scheduled", findings: 0 },
    { id: 3, object: "Офис Центр", date: "02.10.2025", inspector: "Иванов П.С.", status: "in_progress", findings: 5 },
    { id: 4, object: "Школа №15", date: "01.10.2025", inspector: "Козлов Д.А.", status: "overdue", findings: 8 },
  ];

  const documents = [
    { id: 1, name: "Акт выполненных работ №12", project: "ЖК Радуга", date: "05.10.2025", type: "act", status: "signed" },
    { id: 2, name: "Смета строительства", project: "ТЦ Галерея", date: "01.09.2025", type: "budget", status: "approved" },
    { id: 3, name: "Технический отчёт", project: "Офис Центр", date: "03.10.2025", type: "report", status: "pending" },
    { id: 4, name: "Договор подряда", project: "Школа №15", date: "15.08.2025", type: "contract", status: "signed" },
  ];

  const reports = [
    { id: 1, name: "Финансовый отчёт Q3 2025", type: "financial", date: "30.09.2025", size: "2.4 МБ" },
    { id: 2, name: "Отчёт по рискам", type: "risks", date: "05.10.2025", size: "1.8 МБ" },
    { id: 3, name: "Сводка по проверкам", type: "inspections", date: "06.10.2025", size: "3.1 МБ" },
    { id: 4, name: "Анализ отклонений смет", type: "budget", date: "04.10.2025", size: "1.5 МБ" },
  ];

  const risks = [
    { id: 1, title: "Задержка поставки материалов", level: "high", project: "ЖК Радуга", impact: "Возможна задержка сроков на 2 недели" },
    { id: 2, title: "Превышение бюджета", level: "medium", project: "ТЦ Галерея", impact: "Перерасход по статье 'Отделка'" },
    { id: 3, title: "Несоответствие ГОСТ", level: "high", project: "Школа №15", impact: "Требуется переделка фундамента" },
    { id: 4, title: "Нехватка рабочей силы", level: "low", project: "Офис Центр", impact: "Замедление темпов работ" },
  ];

  const contractors = [
    { id: 1, name: "СтройМастер", projects: 5, rating: 4.8, activeProjects: 2, totalBudget: "45 млн ₽" },
    { id: 2, name: "МегаСтрой", projects: 8, rating: 4.5, activeProjects: 3, totalBudget: "67 млн ₽" },
    { id: 3, name: "СтройГрупп", projects: 3, rating: 3.9, activeProjects: 1, totalBudget: "28 млн ₽" },
    { id: 4, name: "ПромСтрой", projects: 6, rating: 4.7, activeProjects: 2, totalBudget: "52 млн ₽" },
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
      completed: { label: "Завершено", variant: "default" as const },
      scheduled: { label: "Запланировано", variant: "secondary" as const },
      in_progress: { label: "В процессе", variant: "default" as const },
      overdue: { label: "Просрочено", variant: "destructive" as const },
      signed: { label: "Подписан", variant: "default" as const },
      approved: { label: "Утверждён", variant: "default" as const },
      pending: { label: "Ожидает", variant: "secondary" as const },
    };
    return statuses[status as keyof typeof statuses] || { label: status, variant: "outline" as const };
  };

  const getRiskBadge = (level: string) => {
    const levels = {
      high: { label: "Высокий", variant: "destructive" as const },
      medium: { label: "Средний", variant: "secondary" as const },
      low: { label: "Низкий", variant: "default" as const },
    };
    return levels[level as keyof typeof levels];
  };

  const renderContent = () => {
    switch (activeSection) {
      case "dashboard":
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Последние проверки</CardTitle>
                  <CardDescription>Статус проверок объектов</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {inspections.slice(0, 3).map((inspection) => {
                      const statusInfo = getStatusBadge(inspection.status);
                      return (
                        <div key={inspection.id} className="flex items-center justify-between p-3 border rounded-lg">
                          <div className="flex-1">
                            <p className="font-medium">{inspection.object}</p>
                            <p className="text-sm text-muted-foreground">{inspection.inspector}</p>
                          </div>
                          <Badge variant={statusInfo.variant}>{statusInfo.label}</Badge>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Критические риски</CardTitle>
                  <CardDescription>Требуют немедленного внимания</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {risks.filter(r => r.level === "high").map((risk) => (
                      <div key={risk.id} className="p-3 border border-destructive/20 rounded-lg bg-destructive/5">
                        <div className="flex items-start justify-between mb-2">
                          <p className="font-medium">{risk.title}</p>
                          <Badge variant="destructive">Высокий</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{risk.project}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      case "inspections":
        return (
          <Card className="shadow-lg animate-fade-in">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Проверки</CardTitle>
                  <CardDescription>Список проверок и инспекций объектов</CardDescription>
                </div>
                <Button>
                  <Icon name="Plus" size={16} className="mr-2" />
                  Создать проверку
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Объект</TableHead>
                    <TableHead>Дата</TableHead>
                    <TableHead>Контролёр</TableHead>
                    <TableHead className="text-center">Замечаний</TableHead>
                    <TableHead className="text-center">Статус</TableHead>
                    <TableHead className="text-right">Действия</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {inspections.map((inspection) => {
                    const statusInfo = getStatusBadge(inspection.status);
                    return (
                      <TableRow key={inspection.id}>
                        <TableCell className="font-medium">{inspection.object}</TableCell>
                        <TableCell>{inspection.date}</TableCell>
                        <TableCell>{inspection.inspector}</TableCell>
                        <TableCell className="text-center">
                          <Badge variant={inspection.findings > 5 ? "destructive" : "secondary"}>
                            {inspection.findings}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-center">
                          <Badge variant={statusInfo.variant}>{statusInfo.label}</Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="outline" size="sm">
                            <Icon name="Eye" size={14} className="mr-1" />
                            Открыть
                          </Button>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        );

      case "documents":
        return (
          <Card className="shadow-lg animate-fade-in">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Документы</CardTitle>
                  <CardDescription>Акты, договоры, отчёты и другие документы</CardDescription>
                </div>
                <Button>
                  <Icon name="Plus" size={16} className="mr-2" />
                  Создать документ
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {documents.map((doc) => {
                  const statusInfo = getStatusBadge(doc.status);
                  return (
                    <div key={doc.id} className="flex items-center justify-between p-4 border rounded-lg hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Icon name="FileText" size={24} className="text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{doc.name}</h3>
                          <p className="text-sm text-muted-foreground">{doc.project}</p>
                          <p className="text-xs text-muted-foreground">{doc.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge variant={statusInfo.variant}>{statusInfo.label}</Badge>
                        <Button variant="outline" size="sm">
                          <Icon name="Download" size={14} className="mr-1" />
                          Скачать
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        );

      case "reports":
        return (
          <Card className="shadow-lg animate-fade-in">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Отчёты</CardTitle>
                  <CardDescription>Сгенерированные отчёты и аналитика</CardDescription>
                </div>
                <Button>
                  <Icon name="Plus" size={16} className="mr-2" />
                  Создать отчёт
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {reports.map((report) => (
                  <Card key={report.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                            <Icon name="BarChart3" size={20} className="text-secondary" />
                          </div>
                          <div>
                            <h3 className="font-semibold">{report.name}</h3>
                            <p className="text-xs text-muted-foreground">{report.date}</p>
                          </div>
                        </div>
                      </div>
                      <Separator className="my-3" />
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">{report.size}</span>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Icon name="Eye" size={14} />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Icon name="Download" size={14} />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        );

      case "risks":
        return (
          <Card className="shadow-lg animate-fade-in">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Управление рисками</CardTitle>
                  <CardDescription>Выявленные риски и рекомендации</CardDescription>
                </div>
                <Button>
                  <Icon name="Plus" size={16} className="mr-2" />
                  Добавить риск
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {risks.map((risk) => {
                  const levelInfo = getRiskBadge(risk.level);
                  return (
                    <Card key={risk.id} className={`hover:shadow-md transition-shadow ${
                      risk.level === "high" ? "border-destructive/30" : ""
                    }`}>
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="font-semibold text-lg">{risk.title}</h3>
                              <Badge variant={levelInfo.variant}>{levelInfo.label}</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mb-2">{risk.project}</p>
                            <p className="text-sm">{risk.impact}</p>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              <Icon name="Edit" size={14} />
                            </Button>
                            <Button variant="outline" size="sm">
                              <Icon name="Trash2" size={14} />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        );

      case "contractors":
        return (
          <Card className="shadow-lg animate-fade-in">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Подрядчики</CardTitle>
                  <CardDescription>Список подрядных организаций</CardDescription>
                </div>
                <Button>
                  <Icon name="Plus" size={16} className="mr-2" />
                  Добавить подрядчика
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {contractors.map((contractor) => (
                  <Card key={contractor.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarFallback className="bg-primary text-primary-foreground">
                              {contractor.name.substring(0, 2)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="font-semibold text-lg">{contractor.name}</h3>
                            <div className="flex items-center gap-1">
                              <Icon name="Star" size={14} className="text-yellow-500 fill-yellow-500" />
                              <span className="text-sm font-medium">{contractor.rating}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Всего проектов</span>
                          <span className="font-medium">{contractor.projects}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Активных</span>
                          <span className="font-medium">{contractor.activeProjects}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Общий бюджет</span>
                          <span className="font-medium">{contractor.totalBudget}</span>
                        </div>
                      </div>
                      <Separator className="my-4" />
                      <Button variant="outline" className="w-full">
                        <Icon name="Eye" size={14} className="mr-2" />
                        Подробнее
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        );

      default:
        return null;
    }
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

          <div className="absolute bottom-0 left-0 right-0 w-64 p-4 border-t border-sidebar-border bg-sidebar">
            <div className="flex items-center gap-3 px-4 py-3">
              <Avatar>
                <AvatarFallback className="bg-sidebar-primary text-sidebar-primary-foreground">
                  ИП
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="text-sm font-medium">Иван Петров</p>
                <p className="text-xs opacity-70">Администратор</p>
              </div>
              <Button variant="ghost" size="sm">
                <Icon name="Settings" size={18} />
              </Button>
            </div>
          </div>
        </aside>

        <main className="flex-1 p-8 pb-24">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-2">
                {menuItems.find(item => item.id === activeSection)?.label || "Главная"}
              </h2>
              <p className="text-muted-foreground">
                {activeSection === "dashboard" && "Панель управления строительными проектами"}
                {activeSection === "objects" && "Управление строительными объектами"}
                {activeSection === "budgets" && "Контроль смет и бюджетов"}
                {activeSection === "inspections" && "Проведение проверок качества"}
                {activeSection === "documents" && "Управление документооборотом"}
                {activeSection === "reports" && "Аналитика и отчётность"}
                {activeSection === "risks" && "Идентификация и контроль рисков"}
                {activeSection === "contractors" && "Управление подрядными организациями"}
              </p>
            </div>

            {activeSection === "dashboard" && (
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
            )}

            {activeSection === "objects" && (
              <Card className="shadow-lg animate-fade-in">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Активные объекты</CardTitle>
                      <CardDescription>Список строительных объектов в работе</CardDescription>
                    </div>
                    <div className="flex gap-2">
                      <Input placeholder="Поиск..." className="w-64" />
                      <Button>
                        <Icon name="Plus" size={16} className="mr-2" />
                        Добавить объект
                      </Button>
                    </div>
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
                              <p className="text-sm text-muted-foreground mt-1">Подрядчик: {project.contractor}</p>
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
                              <div className="flex gap-2">
                                <Button variant="outline" size="sm">
                                  <Icon name="FileText" size={14} className="mr-1" />
                                  Сметы
                                </Button>
                                <Button variant="outline" size="sm">
                                  Подробнее
                                  <Icon name="ChevronRight" size={14} className="ml-1" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            )}

            {activeSection === "budgets" && (
              <Card className="shadow-lg animate-fade-in">
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
                      <Button size="sm">
                        <Icon name="Upload" size={16} className="mr-2" />
                        Импорт сметы
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
                              <Badge variant="default" className="bg-success text-white">Экономия</Badge>
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
            )}

            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;