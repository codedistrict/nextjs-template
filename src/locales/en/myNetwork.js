const my_network = {
  accounts: {
    accepted_pms: 'Accepted Payment Methods',
    add_note: 'Add a note',
    buying: 'Buying',
    cash_in_advance: 'Cash-in-advance',
    changeStatus: {
      message: '{{businessData}} will be designated "{{ status }}"',
      title: 'Change Business Status',
    },
    company_notes: 'Company notes',
    consignment: 'Consignment',
    delete_notes: {
      message: 'Are you sure you want to delete this note?',
      title: 'Delete note',
    },
    deleteLeads: {
      message_end: 'from this folder?',
      message_start: 'Are you sure you want to delete',
      title: 'Delete Business',
    },
    documentary_collection: 'Documentary Collection',
    letters_of_credit: 'Letters of credit',
    moveLeads: {
      create_list_label: 'Create a new list',
      message: 'Move Business',
      select_list_prompt: 'or select existing list',
      title: 'Move business to a new folder',
    },
    notes: 'Notes',
    open_account: 'Open account',
    open_account_pmt: 'Open account payment terms',
    payment_terms: 'Payment terms',
    selling: 'Selling',
    title: ' Prospects and accounts',
  },
  actions: {
    confirm: 'Confirm',
    delete: 'Delete',
    merge: 'Merge',
    overwrite: 'Overwrite',
    rename: 'Rename',
    sort_by: 'Sort By',
    view: 'View',
  },
  alerts: {
    business_card_request: 'Business Card Request',
    contact_privacy_preferences: 'Contact Privacy Preferences',
    contacts_delete_folder_prompt: 'Are you sure you want to delete the folder',
    contacts_delete_folder_warning: 'We will move the contents into the "New contacts" folder.',
    create_business_list: 'Create a new business list',
    create_new_list: 'Create a new list',
    delete_folder_and_contents: 'Delete folder and contents',
    delete_folder_business_accounts:
      'Are you sure you want to delete the folder? Unique content will be moved to "New accounts."',
    delete_folder_confirmation: 'Are you sure you want to delete the folder and its contents?',
    delete_folder_only: 'Delete folder only',
    delete_list: 'Delete a list',
    list_description: 'List Description',
    list_name: 'List Name',
    merge_business_folders: 'Merge business folders',
    merge_folder_prompt: 'Merge folder',
    new_list_name: 'New list name',
    rename_folder: 'Rename folder',
    rename_folder_prompt: 'Change the folder name of',
    save_selected_businesses: 'Save Selected businesses',
    save_selected_professionals: 'Save selected professionals',
    select_existing_list: 'or select existing list',
    select_folder_error: 'Either set a New list name or select item from list',
    select_list: 'Select list',
    update_business_list: 'Update list description',
    update_people_list: 'Update list description',
  },
  bcards: {
    accept_request: 'Accept Request',
    accepted_request_results: '{{count}} requests have been accepted',
    block_user: 'Block User',
    declined_request_results: '{{count}} requests have been declined',
    deny_request: 'Deny Request',
    received_count: ' - Received ({{count}})',
    sent_count: ' - Sent ({{count}})',
    title: 'Business card requests',
    withdraw_request_results: '{{count}} requests have been canceled',
  },
  business_lists: {
    business_lead_added: '{{status}} added as a Business Account',
    deleteBusinesses: {
      message_end: 'from this folder?',
      message_start: 'Are you sure you want to delete',
      title: 'Delete Business',
    },
    moveBusinesses: {
      create_list_label: 'Create a new list',
      message: 'Move',
      select_list_prompt: 'or select existing list',
      title: 'Move business to a new folder',
    },
    title: 'Business Lists',
  },
  contacts: {
    deleteContacts: {
      message: 'Are you sure you want to delete it?',
      title: 'Delete Contact',
    },
    moveContacts: {
      create_list_label: 'Create a new contact list',
      message: 'Move contact',
      select_list_prompt: 'or select existing contact list',
      title: 'Change Folder',
    },
    title: 'Manage your contacts',
  },
  default_folders: {
    accounts: 'New accounts',
    business_lists: 'New businesses',
    contacts: 'New contacts',
    people_lists: 'New accounts',
  },
  edit_filters: {
    area_of_interest: 'Area of Interest',
    business: 'Business',
    business_email: 'Business email',
    business_keywords: 'Business Description keywords',
    business_record: 'Business Record Must Include',
    city: 'City',
    clear_selections: 'Clear Selections',
    country: 'Country',
    edit_selections: 'Edit selections',
    employees_from_to: 'From {{from}} to {{to}} employees',
    entity_type: 'Entity type',
    headquarters: 'Headquarters',
    intent: 'Intent',
    interest_level: 'Interest level',
    is_headquarters: 'Is this headquarters',
    job_function: 'Job function',
    job_title: 'Job title',
    location: 'Location',
    nbr_employees: 'Number of Employees',
    ownership: 'Ownership',
    product_type: 'Select Product type',
    products_needs: 'Buyer intent - Products and material needs',
    provider_needs: 'Buyer intent - Service provider needs',
    revenue: 'Revenue (in million USD)',
    revenue_from_to: 'From {{from}}M to {{to}}M',
    select_area_of_interest: 'Select an area of interest',
    select_entity_type: 'Select entity type',
    select_job_title: 'Select job title',
    select_ownership: 'Select ownership type',
    service_type: 'Select Service type',
    state: 'State',
    view_results: 'View Results',
  },
  filter_names: {
    area_of_interest: 'Area of Interest',
    employees: 'Employees',
    entity_type: 'Entity type',
    headquarters: 'Headquarters',
    job_title: 'Job title',
    keywords: 'Keywords',
    location: 'Location',
    must_include: 'Business record must include',
    ownership: 'Ownership',
    product_need: 'Products and material needs',
    provider_need: 'Service provider needs',
    revenue: 'Revenue',
  },
  filters: {
    accounts: 'Accounts',
    all: 'All',
    big_earners: 'Big Earners',
    customer_rating: 'Customer Rating',
    date: 'Date',
    endorsements: 'Endorsements',
    followers: 'Followers',
    influencers: 'Influencers',
    name: 'Name',
    premium_users: 'Premium Users',
    prospects: 'Prospects',
    revenue: 'Revenue',
  },
  invite: {
    address_book: {
      title: 'Invite contacts from your address book',
    },
    csv: {
      footer_instructions:
        'Pellentesque velit mauris, tempus ut massa vel, imperdiet lacinia dui. Aenean eleifend sodales turpis at laoreet. Morbi posuere rhoncus ex, sed mattis nunc tristique in.',
      import_failed: 'Failed to read {{count}} contacts from CSV.',
      import_failed_one: 'Failed to read 1 contact from CSV.',
      import_success: 'Successfully imported {{count}} contacts from CSV.',
      import_success_one: 'Successfully imported 1 contact from CSV.',
      invalid_column_headers: 'The column header First Name, Last Name and Email are required.',
      invalid_file: 'Invalid or no file selected.',
      no_contact_in_csv: 'No contacts found in csv file.',
      title: 'Invite contacts from a CSV file',
      tooltip_message:
        'Invite contacts using a csv file (comma-separated items). The first row of the csv should label the column headers; First Name, Last Name and Email.',
    },
    email_address: 'Email address',
    first_name: 'First Name',
    last_name: 'Last Name',
    page_title: 'Invite external contacts',
    user_already_exist: 'User with email already exist on list.',
  },
  left_menu: {
    accept: 'Accept',
    accept_selected: 'Accept Selected',
    address: 'Address',
    businesses_0: '{{count}} business',
    businesses_other: '{{count}} businesses',
    chat: 'Chat',
    decline: 'Decline',
    decline_selected: 'Decline Selected',
    delete: 'Delete',
    detail: 'Detail',
    email: 'Email',
    export_selected: 'Export Selected',
    fax: 'Fax',
    invite_friend: 'Invite a friend',
    list: 'List',
    list_size: 'List size',
    message_from: 'Message from',
    message_to: 'Your message to',
    move: 'Move',
    people_in_group: '{{count}} accounts',
    phone: 'Telephone',
    request_bcard: 'Request B-Card',
    requests: 'requests',
    revenue: 'Revenue',
    selected_prof: 'Selected Professionals',
    selected_request: 'Selected Requests',
    status: 'Status',
    view_contact: 'View Contact',
    view_profile: 'View Profile',
    website: 'Website',
    withdraw: 'Withdraw',
    withdraw_selected: 'Withdraw Selected',
  },
  module_name: 'My Network',
  module_number: '',
  pages: {
    accounts: 'Accounts',
    bcards: 'B - Cards',
    business_lists: 'Business Lists',
    contacts: 'Contacts',
    peoplelists: 'People Lists',
    view_business: 'View Business',
    view_businesses: 'View Businesses',
    view_people: 'View People',
  },
  peoplelists: {
    add_to_list: 'Add to a list',
    deleteAccounts: {
      message: 'Are you sure you want to remove it?',
      title: 'Delete Accounts',
    },
    moveAccounts: {
      create_list_label: 'Create a new list',
      message: 'Move Contact',
      select_list_prompt: 'or select existing list',
      title: 'Change Folder',
    },
    request_bcard: 'Request a business card',
    title: 'Manage people lists',
  },
  save_selected: 'Save Selected',
  selected_business: 'Selected: {{count}} businesses',
  selected_business_one: 'Selected: 1 business',
  selected_user: 'Selected: {{count}} professionals',
  selected_user_one: 'Selected: 1 professional',
  sidebar_bcard_requests: '{{count}} B-Card requests',
  sidebar_bcard_requests_0: 'No B-Card requests',
  sidebar_bcard_requests_one: '1 B-Card request',
  sidebar_filters: 'Filters',
  sidebar_filters_none: 'No filters selected',
  sidebar_industry: 'Industry',
  sidebar_industry_none: 'No industry selected',
  sort_by: 'Sort by: ',
  sorts: {
    customer_rating: 'Customer Rating',
    date: 'Date',
    endorsements: 'Endorsements',
    followers: 'Followers',
    name: 'Name',
    revenue: 'Revenue',
  },
  status: {
    active: 'Active account',
    cold: 'Cold lead',
    inactive: 'Inactive',
    prospect: 'Prospect',
  },
  title: 'My Network',
  view: 'View: ',
  view_business: {
    results_0: 'Search results : No businesses',
    results_one: 'Search results : One business',
    results_other: 'Search results : {{count}} businesses',
    save_results: '{{count}} businesses have been added',
    title: '',
  },
  view_people: {
    results_0: 'Search results : No professionals',
    results_one: 'Search results : One professional',
    results_other: 'Search results : {{count}} professionals',
    save_results: '{{count}} professionals have been added',
    title: '',
  },
  views: {
    accounts: 'Accounts',
    big_earners: 'Big Earners',
    cold_leads: 'Cold Leads',
    influencers: 'Influencers',
    premium_users: 'Premium Users',
    prospects: 'Prospects',
    received: 'Received',
    sent: 'Sent',
    view_all: 'all',
  },
};
export default my_network;
