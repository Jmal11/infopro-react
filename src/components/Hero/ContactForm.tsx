import React, { useEffect } from 'react';

declare global {
  interface Window {
    hbspt: {
      forms: {
        create: (config: {
          portalId: string;
          formId: string;
          region?: string;
          target: string;
          cssClass?: string;
        }) => void;
      };
    };
  }
}

export default function ContactForm() {
  const formContainerId = 'hubspot-form-container';

  useEffect(() => {
    const scriptId = 'hs-script-loader';

    const rearrangeFields = () => {
      const form = document.querySelector(`#${formContainerId} form`);
      if (!form) return;

      const getFieldGroup = (fieldName: string) =>
        form.querySelector(`.hs-${fieldName}`)?.closest('.hs-form-field');

      const firstName = getFieldGroup('firstname');
      const lastName = getFieldGroup('lastname');
      const email = getFieldGroup('email');
      const phone = getFieldGroup('phone');

      // Rearrange logic
      const insertBefore = (newNode: HTMLElement, referenceNode: Element) => {
        if (referenceNode.parentElement) {
          referenceNode.parentElement.insertBefore(newNode, referenceNode);
        }
      };

      if (firstName && lastName) {
        const nameRow = document.createElement('div');
        nameRow.className = 'field-row';
        nameRow.appendChild(firstName);
        nameRow.appendChild(lastName);
        insertBefore(nameRow, email || phone);
      }

      if (email && phone) {
        const contactRow = document.createElement('div');
        contactRow.className = 'field-row';
        contactRow.appendChild(email);
        contactRow.appendChild(phone);
        insertBefore(contactRow, document.querySelector('.hs-form-field:not(.hs-firstname):not(.hs-lastname):not(.hs-email):not(.hs-phone)'));
      }
    };

    const waitForForm = () => {
      const interval = setInterval(() => {
        const form = document.querySelector(`#${formContainerId} form`);
        if (form && form.querySelector('.hs-firstname') && form.querySelector('.hs-lastname')) {
          clearInterval(interval);
          rearrangeFields();
        }
      }, 300);
    };

    const loadForm = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: '2854653',
          formId: 'f7dd10f9-0345-4c05-9107-08fc33b223e5',
          region: 'na1',
          target: `#${formContainerId}`,
          cssClass: 'styled-hubspot-form',
        });

        waitForForm();
      }
    };

    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.src = 'https://js.hsforms.net/forms/embed/v2.js';
      script.async = true;
      script.id = scriptId;
      script.onload = loadForm;
      document.body.appendChild(script);
    } else {
      loadForm();
    }
  }, []);

  return (
    <section
      className="w-full py-12"
      style={{
        background: 'linear-gradient(to bottom, #f6f6f6 0%, #f6f6f6 50%, #ffffff 50%, #ffffff 100%)'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-extrabold text-center mb-2">Let's Start a Conversation</h2>
        <p className="text-center text-gray-600 mb-6">Unlock New Possibilities.</p>

        <div id="hubspot-form-container" />

        <style>{`
          .styled-hubspot-form form {
            font-family: 'Inter', sans-serif;
          }

          .styled-hubspot-form .field-row {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            margin-bottom: 16px;
          }

          .styled-hubspot-form .field-row .hs-form-field {
            flex: 1 1 48%;
            min-width: 200px;
          }

          .styled-hubspot-form label {
            display: block;
            font-size: 14px;
            margin-bottom: 4px;
            color: #000;
            font-weight: 500;
          }

          .styled-hubspot-form input[type="text"],
          .styled-hubspot-form input[type="email"],
          .styled-hubspot-form input[type="tel"],
          .styled-hubspot-form textarea,
          .styled-hubspot-form select {
            width: 100%;
            border: none;
            border-bottom: 1px solid #aaa;
            background: transparent;
            padding: 6px 2px;
            font-size: 15px;
            outline: none;
          }

          .styled-hubspot-form textarea {
            resize: vertical;
          }

          .styled-hubspot-form input[type="submit"],
          .styled-hubspot-form .hs-button {
            background: none;
            color: #6b21a8;
            font-weight: bold;
            border: 2px solid #6b21a8;
            padding: 12px 28px;
            border-radius: 4px;
            text-transform: uppercase;
            letter-spacing: 1px;
            cursor: pointer;
            transition: 0.2s ease;
            margin-top: 24px;
          }

          .styled-hubspot-form input[type="submit"]:hover,
          .styled-hubspot-form .hs-button:hover {
            background: #6b21a8;
            color: white;
          }

          .styled-hubspot-form .hs-form-booleancheckbox {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-top: 16px;
          }

          .styled-hubspot-form input[type="file"] {
            margin-top: 10px;
          }
        `}</style>
        </div>
      </div>
    </section>
  );
}
