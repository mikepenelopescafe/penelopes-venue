import { b as createAstro, c as createComponent, m as maybeRenderHead, a as renderTemplate, r as renderComponent, F as Fragment$1 } from '../chunks/astro/server_CwXNHDtl.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BU3SEtpR.mjs';
import 'clsx';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import * as React from 'react';
import { useState } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { c as cn } from '../chunks/utils_B05Dmz_H.mjs';
import * as LabelPrimitive from '@radix-ui/react-label';
import * as SelectPrimitive from '@radix-ui/react-select';
import { ChevronDown, ChevronUp, Check } from 'lucide-react';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://penelopesvenue.com");
const $$ContactHero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ContactHero;
  const { title = "Let's Create Something Beautiful Together", subtitle = "Whether you're planning a wedding, corporate event, or special celebration, we're here to make your vision come to life." } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="relative py-24 px-6 overflow-hidden"> <!-- Background with venue styling --> <div class="absolute inset-0 bg-gradient-dark"></div> <div class="absolute inset-0 bg-pattern-dots opacity-10"></div> <!-- Content --> <div class="relative z-10 text-center max-w-4xl mx-auto"> <div class="mb-8"> <h1 class="text-5xl md:text-6xl lg:text-7xl font-display text-white mb-6 leading-tight"> ${title} </h1> <p class="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed"> ${subtitle} </p> </div> <!-- Quick navigation to forms --> <div class="flex flex-col sm:flex-row gap-6 justify-center items-center"> <a href="#book" class="btn-primary-lg">
Book Your Event
</a> <a href="#general" class="btn-outline-lg">
General Inquiry
</a> </div> <!-- Contact info --> <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"> <div class="text-center"> <h3 class="text-lg font-display text-white mb-2">Call Us</h3> <p class="text-white/80"><a href="tel:(720) 639-2406" class="hover:text-white transition-colors">(720) 639-2406</a></p> </div> <div class="text-center"> <h3 class="text-lg font-display text-white mb-2">Email</h3> <p class="text-white/80"><a href="mailto:events@penelopes.cafe" class="hover:text-white transition-colors">events@penelopes.cafe</a></p> </div> <div class="text-center"> <h3 class="text-lg font-display text-white mb-2">Visit</h3> <p class="text-white/80">8050 N Federal Blvd<br>Westminster, CO 80031</p> </div> </div> </div> <!-- Scroll hint --> <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2"> <div class="animate-bounce"> <svg class="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path> </svg> </div> </div> </section>`;
}, "/Users/mike/Documents/Projects/penelopes-venue/src/components/ContactHero.astro", void 0);

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-lg gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-lg px-6 has-[>svg]:px-4",
        icon: "size-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      "data-slot": "button",
      className: cn(buttonVariants({ variant, size }), className),
      ...props
    }
  );
}

function Input({ className, type, ...props }) {
  return /* @__PURE__ */ jsx(
    "input",
    {
      type,
      "data-slot": "input",
      className: cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      ),
      ...props
    }
  );
}

const Textarea = React.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "textarea",
      {
        className: cn(
          "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Textarea.displayName = "Textarea";

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
const Label = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  LabelPrimitive.Root,
  {
    ref,
    className: cn(labelVariants(), className),
    ...props
  }
));
Label.displayName = LabelPrimitive.Root.displayName;

const Select = SelectPrimitive.Root;
const SelectValue = SelectPrimitive.Value;
const SelectTrigger = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  SelectPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(SelectPrimitive.Icon, { asChild: true, children: /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
const SelectScrollUpButton = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.ScrollUpButton,
  {
    ref,
    className: cn(
      "flex cursor-default items-center justify-center py-1",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx(ChevronUp, { className: "h-4 w-4" })
  }
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;
const SelectScrollDownButton = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.ScrollDownButton,
  {
    ref,
    className: cn(
      "flex cursor-default items-center justify-center py-1",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4" })
  }
));
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;
const SelectContent = React.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ jsx(SelectPrimitive.Portal, { children: /* @__PURE__ */ jsxs(
  SelectPrimitive.Content,
  {
    ref,
    className: cn(
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      className
    ),
    position,
    ...props,
    children: [
      /* @__PURE__ */ jsx(SelectScrollUpButton, {}),
      /* @__PURE__ */ jsx(
        SelectPrimitive.Viewport,
        {
          className: cn(
            "p-1",
            position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children
        }
      ),
      /* @__PURE__ */ jsx(SelectScrollDownButton, {})
    ]
  }
) }));
SelectContent.displayName = SelectPrimitive.Content.displayName;
const SelectLabel = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.Label,
  {
    ref,
    className: cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className),
    ...props
  }
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;
const SelectItem = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  SelectPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Check, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ jsx(SelectPrimitive.ItemText, { children })
    ]
  }
));
SelectItem.displayName = SelectPrimitive.Item.displayName;
const SelectSeparator = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

const alertVariants = cva(
  "relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground",
        destructive: "text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Alert({
  className,
  variant,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "alert",
      role: "alert",
      className: cn(alertVariants({ variant }), className),
      ...props
    }
  );
}
function AlertDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "alert-description",
      className: cn(
        "text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed",
        className
      ),
      ...props
    }
  );
}

function ContactForm({ formType }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    ...formType === "booking" ? {
      eventType: "",
      guestCount: "",
      datePreference: "",
      budgetRange: "",
      specialRequirements: ""
    } : {
      subject: "",
      message: ""
    }
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle");
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }
    if (formType === "booking") {
      if (!formData.eventType) {
        newErrors.eventType = "Please select an event type";
      }
      if (!formData.guestCount) {
        newErrors.guestCount = "Please select guest count";
      }
    } else {
      if (!formData.subject) {
        newErrors.subject = "Please select a subject";
      }
      if (!formData.message?.trim()) {
        newErrors.message = "Message is required";
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: void 0 }));
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setIsSubmitting(true);
    setSubmitStatus("idle");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          formType,
          ...formData
        })
      });
      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          ...formType === "booking" ? {
            eventType: "",
            guestCount: "",
            datePreference: "",
            budgetRange: "",
            specialRequirements: ""
          } : {
            subject: "",
            message: ""
          }
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "name", className: "text-foreground", children: "Full Name *" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              id: "name",
              type: "text",
              value: formData.name,
              onChange: (e) => handleInputChange("name", e.target.value),
              className: errors.name ? "border-destructive" : "",
              placeholder: "Your full name"
            }
          ),
          errors.name && /* @__PURE__ */ jsx("p", { className: "text-sm text-destructive", children: errors.name })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "email", className: "text-foreground", children: "Email Address *" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              id: "email",
              type: "email",
              value: formData.email,
              onChange: (e) => handleInputChange("email", e.target.value),
              className: errors.email ? "border-destructive" : "",
              placeholder: "your.email@example.com"
            }
          ),
          errors.email && /* @__PURE__ */ jsx("p", { className: "text-sm text-destructive", children: errors.email })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "phone", className: "text-foreground", children: "Phone Number *" }),
        /* @__PURE__ */ jsx(
          Input,
          {
            id: "phone",
            type: "tel",
            value: formData.phone,
            onChange: (e) => handleInputChange("phone", e.target.value),
            className: errors.phone ? "border-destructive" : "",
            placeholder: "(303) 555-0123"
          }
        ),
        errors.phone && /* @__PURE__ */ jsx("p", { className: "text-sm text-destructive", children: errors.phone })
      ] }),
      formType === "booking" ? /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx(Label, { className: "text-foreground", children: "Event Type *" }),
            /* @__PURE__ */ jsxs(Select, { value: formData.eventType, onValueChange: (value) => handleInputChange("eventType", value), children: [
              /* @__PURE__ */ jsx(SelectTrigger, { className: errors.eventType ? "border-destructive" : "", children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Select event type" }) }),
              /* @__PURE__ */ jsxs(SelectContent, { children: [
                /* @__PURE__ */ jsx(SelectItem, { value: "wedding", children: "Wedding" }),
                /* @__PURE__ */ jsx(SelectItem, { value: "corporate", children: "Corporate Event" }),
                /* @__PURE__ */ jsx(SelectItem, { value: "birthday", children: "Birthday Celebration" }),
                /* @__PURE__ */ jsx(SelectItem, { value: "anniversary", children: "Anniversary" }),
                /* @__PURE__ */ jsx(SelectItem, { value: "graduation", children: "Graduation Party" }),
                /* @__PURE__ */ jsx(SelectItem, { value: "other", children: "Other" })
              ] })
            ] }),
            errors.eventType && /* @__PURE__ */ jsx("p", { className: "text-sm text-destructive", children: errors.eventType })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx(Label, { className: "text-foreground", children: "Expected Guest Count *" }),
            /* @__PURE__ */ jsxs(Select, { value: formData.guestCount, onValueChange: (value) => handleInputChange("guestCount", value), children: [
              /* @__PURE__ */ jsx(SelectTrigger, { className: errors.guestCount ? "border-destructive" : "", children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Select guest count" }) }),
              /* @__PURE__ */ jsxs(SelectContent, { children: [
                /* @__PURE__ */ jsx(SelectItem, { value: "50-60", children: "50-60 guests" }),
                /* @__PURE__ */ jsx(SelectItem, { value: "60-70", children: "60-70 guests" }),
                /* @__PURE__ */ jsx(SelectItem, { value: "70-80", children: "70-80 guests" }),
                /* @__PURE__ */ jsx(SelectItem, { value: "80-90", children: "80-90 guests" }),
                /* @__PURE__ */ jsx(SelectItem, { value: "90-100", children: "90-100 guests" })
              ] })
            ] }),
            errors.guestCount && /* @__PURE__ */ jsx("p", { className: "text-sm text-destructive", children: errors.guestCount })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "datePreference", className: "text-foreground", children: "Preferred Date Range" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                id: "datePreference",
                type: "text",
                value: formData.datePreference,
                onChange: (e) => handleInputChange("datePreference", e.target.value),
                placeholder: "e.g., June 2024, Summer 2024"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx(Label, { className: "text-foreground", children: "Budget Range" }),
            /* @__PURE__ */ jsxs(Select, { value: formData.budgetRange, onValueChange: (value) => handleInputChange("budgetRange", value), children: [
              /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Select budget range" }) }),
              /* @__PURE__ */ jsxs(SelectContent, { children: [
                /* @__PURE__ */ jsx(SelectItem, { value: "5000-7500", children: "$300 - $1,000" }),
                /* @__PURE__ */ jsx(SelectItem, { value: "5000-7500", children: "$1,000 - $2,500" }),
                /* @__PURE__ */ jsx(SelectItem, { value: "5000-7500", children: "$2,500 - $5,000" }),
                /* @__PURE__ */ jsx(SelectItem, { value: "5000-7500", children: "$5,000 - $7,500" }),
                /* @__PURE__ */ jsx(SelectItem, { value: "7500-10000", children: "$7,500 - $10,000" }),
                /* @__PURE__ */ jsx(SelectItem, { value: "10000-15000", children: "$10,000+" }),
                /* @__PURE__ */ jsx(SelectItem, { value: "discuss", children: "Prefer to discuss" })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "specialRequirements", className: "text-foreground", children: "Special Requirements or Questions" }),
          /* @__PURE__ */ jsx(
            Textarea,
            {
              id: "specialRequirements",
              value: formData.specialRequirements,
              onChange: (e) => handleInputChange("specialRequirements", e.target.value),
              placeholder: "Tell us about your vision, dietary requirements, entertainment preferences, or any special accommodations needed...",
              rows: 4
            }
          )
        ] })
      ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx(Label, { className: "text-foreground", children: "Subject *" }),
          /* @__PURE__ */ jsxs(Select, { value: formData.subject, onValueChange: (value) => handleInputChange("subject", value), children: [
            /* @__PURE__ */ jsx(SelectTrigger, { className: errors.subject ? "border-destructive" : "", children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "What can we help you with?" }) }),
            /* @__PURE__ */ jsxs(SelectContent, { children: [
              /* @__PURE__ */ jsx(SelectItem, { value: "media", children: "Media & Press Inquiry" }),
              /* @__PURE__ */ jsx(SelectItem, { value: "vendor", children: "Vendor Partnership" }),
              /* @__PURE__ */ jsx(SelectItem, { value: "business", children: "Business Opportunity" }),
              /* @__PURE__ */ jsx(SelectItem, { value: "feedback", children: "Feedback & Suggestions" }),
              /* @__PURE__ */ jsx(SelectItem, { value: "other", children: "Other Inquiry" })
            ] })
          ] }),
          errors.subject && /* @__PURE__ */ jsx("p", { className: "text-sm text-destructive", children: errors.subject })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "message", className: "text-foreground", children: "Message *" }),
          /* @__PURE__ */ jsx(
            Textarea,
            {
              id: "message",
              value: formData.message,
              onChange: (e) => handleInputChange("message", e.target.value),
              className: errors.message ? "border-destructive" : "",
              placeholder: "Please provide details about your inquiry...",
              rows: 6
            }
          ),
          errors.message && /* @__PURE__ */ jsx("p", { className: "text-sm text-destructive", children: errors.message })
        ] })
      ] }),
      /* @__PURE__ */ jsx(
        Button,
        {
          type: "submit",
          disabled: isSubmitting,
          className: "w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-lg font-medium",
          children: isSubmitting ? "Sending..." : formType === "booking" ? "Request Event Quote" : "Send Message"
        }
      )
    ] }),
    submitStatus === "success" && /* @__PURE__ */ jsx(Alert, { className: "border-green-200 bg-green-50", children: /* @__PURE__ */ jsx(AlertDescription, { className: "text-green-800", children: formType === "booking" ? "Thank you! We've received your event inquiry and will contact you within 24 hours to discuss your vision and provide a personalized quote." : "Thank you for your message! We'll respond to your inquiry within 4 hours during business hours." }) }),
    submitStatus === "error" && /* @__PURE__ */ jsx(Alert, { className: "border-red-200 bg-red-50", children: /* @__PURE__ */ jsx(AlertDescription, { className: "text-red-800", children: "Sorry, there was an error sending your message. Please try again or contact us directly at (303) 555-0123." }) })
  ] });
}

const $$Astro = createAstro("https://penelopesvenue.com");
const $$ContactSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ContactSection;
  const { title, subtitle, formType } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="py-20 px-6"> <div class="max-w-6xl mx-auto"> <!-- Section Header --> <div class="text-center mb-16"> <h2 class="text-4xl md:text-5xl font-display text-foreground mb-4"> ${title} </h2> <p class="text-xl text-muted-foreground max-w-2xl mx-auto"> ${subtitle} </p> </div> <!-- Two Column Layout --> <div class="grid lg:grid-cols-2 gap-12 items-start"> <!-- Form Column --> <div class="order-2 lg:order-1"> <div class="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-primary/10 shadow-2xl"> ${renderComponent($$result, "ContactForm", ContactForm, { "formType": formType, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/mike/Documents/Projects/penelopes-venue/src/components/ContactForm.tsx", "client:component-export": "default" })} </div> </div> <!-- Info Column --> <div class="order-1 lg:order-2 space-y-8"> ${formType === "booking" ? renderTemplate`${renderComponent($$result, "Fragment", Fragment$1, {}, { "default": ($$result2) => renderTemplate`  <div class="space-y-6"> <div class="flex items-start gap-4"> <div class="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center"> <span class="text-2xl text-primary font-bold">1</span> </div> <div> <h3 class="text-xl font-display text-foreground mb-2">Complete Event Package</h3> <p class="text-muted-foreground">Everything you need for your perfect celebration - catering, bar service, and professional staff.</p> </div> </div> <div class="flex items-start gap-4"> <div class="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center"> <span class="text-2xl text-primary font-bold">2</span> </div> <div> <h3 class="text-xl font-display text-foreground mb-2">Curated Cuisine</h3> <p class="text-muted-foreground">Experience our signature latin-inspired and American classic dishes crafted with fresh, local ingredients.</p> </div> </div> <div class="flex items-start gap-4"> <div class="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center"> <span class="text-2xl text-primary font-bold">3</span> </div> <div> <h3 class="text-xl font-display text-foreground mb-2">Premium Bar Service</h3> <p class="text-muted-foreground">Curated cocktails and beverages served by our experienced professional bartending team.</p> </div> </div> </div>  <div class="bg-gradient-card rounded-xl p-6 border border-primary/20"> <h3 class="text-lg font-display text-foreground mb-4">Perfect for Groups of 50-100</h3> <div class="grid grid-cols-2 gap-4"> <div class="text-center"> <div class="text-2xl font-bold text-primary">50-100</div> <div class="text-sm text-muted-foreground">Guest Capacity</div> </div> <div class="text-center"> <div class="text-2xl font-bold text-primary">20+</div> <div class="text-sm text-muted-foreground">Years Experience</div> </div> </div> </div> ` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment$1, {}, { "default": ($$result2) => renderTemplate`  <div class="space-y-6"> <div class="flex items-start gap-4"> <div class="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center"> <span class="text-2xl text-primary font-bold">•</span> </div> <div> <h3 class="text-xl font-display text-foreground mb-2">Media & Press</h3> <p class="text-muted-foreground">Journalists, photographers, and media professionals - we'd love to connect!</p> </div> </div> <div class="flex items-start gap-4"> <div class="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center"> <span class="text-2xl text-primary font-bold">•</span> </div> <div> <h3 class="text-xl font-display text-foreground mb-2">Vendor Partnerships</h3> <p class="text-muted-foreground">Florists, planners, musicians - let's collaborate on beautiful events together.</p> </div> </div> <div class="flex items-start gap-4"> <div class="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center"> <span class="text-2xl text-primary font-bold">•</span> </div> <div> <h3 class="text-xl font-display text-foreground mb-2">Business Opportunities</h3> <p class="text-muted-foreground">Corporate events, private parties, and special celebrations welcome.</p> </div> </div> </div>  <div class="bg-gradient-card rounded-xl p-6 border border-primary/20 text-center"> <div class="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4"> <span class="text-2xl text-primary font-bold">✓</span> </div> <h3 class="text-lg font-display text-foreground mb-2">Quick Response</h3> <p class="text-muted-foreground">We typically respond to inquiries within 4 hours during business hours.</p> </div> ` })}`} </div> </div> </div> </section>`;
}, "/Users/mike/Documents/Projects/penelopes-venue/src/components/ContactSection.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const seo = {
    title: "Contact Penelope's Venue - Book Your Event Today",
    description: "Ready to host your special event at Penelope's? Contact us today to book your wedding, corporate event, or celebration. We'll help make your vision a reality.",
    keywords: "contact Penelope's venue, book event Westminster, wedding venue contact, event venue booking, Penelope's Cafe venue inquiry"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": seo.title, "description": seo.description, "keywords": seo.keywords, "data-astro-cid-uw5kdbxl": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ContactHero", $$ContactHero, { "data-astro-cid-uw5kdbxl": true })} ${maybeRenderHead()}<div id="book" data-astro-cid-uw5kdbxl> ${renderComponent($$result2, "ContactSection", $$ContactSection, { "title": "Book Your Event", "subtitle": "Ready to create unforgettable memories? Let's plan your special celebration together.", "formType": "booking", "data-astro-cid-uw5kdbxl": true })} </div> <div id="general" data-astro-cid-uw5kdbxl> ${renderComponent($$result2, "ContactSection", $$ContactSection, { "title": "General Inquiries", "subtitle": "Have questions about our venue, services, or partnership opportunities?", "formType": "general", "data-astro-cid-uw5kdbxl": true })} </div> ` })} `;
}, "/Users/mike/Documents/Projects/penelopes-venue/src/pages/contact.astro", void 0);

const $$file = "/Users/mike/Documents/Projects/penelopes-venue/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
